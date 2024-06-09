package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.files.service.FileService;
import project.musicapp.api.profiles.dto.UpdateBannerAvatarResponseDTO;
import project.musicapp.api.profiles.type.BannerAvatarType;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProfileBannerAvatarService {
    private final UserService userService;
    private final AccessTokenService accessTokenService;
    private final FileService fileService;

    public UpdateBannerAvatarResponseDTO updateBannerOrAvatar(HttpHeaders headers,
                                                              String bannerOrAvatarType,
                                                              MultipartFile file
    ) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);

        if(!isPresentUserInToken(accessToken)) {
            return getUpdateBannerAvatarResponse(false);
        }

        String uuid = UUID.randomUUID().toString();
        String fileName = getNewFileWithExtension(uuid, file);
        User user = this.userService.getUserFromAccessToken(accessToken).get();
        BannerAvatarType bannerAvatarType = BannerAvatarType.valueOf(bannerOrAvatarType.toUpperCase());

        return switch (bannerAvatarType) {
            case BANNER -> {
                this.userService.updateUserBannerByUserId(user.getId(), fileName);
                uploadFile(uuid, file);
                yield getUpdateBannerAvatarResponse(true);
            }
            case AVATAR -> {
                this.userService.updateUserAvatarByUserId(user.getId(), fileName);
                uploadFile(uuid, file);
                yield getUpdateBannerAvatarResponse(true);
            }
        };
    }

    private boolean isPresentUserInToken(String accessToken) {
        return this.userService.getUserFromAccessToken(accessToken).isPresent();
    }

    private String getNewFileWithExtension(String uuid, MultipartFile file) {
        return uuid + "." + Objects.requireNonNull(file.getOriginalFilename()).split("\\.")[1];
    }

    private void uploadFile(String uuid, MultipartFile file) {
        this.fileService.upload(uuid, file)
            .map(ResponseEntity::ok)
            .onErrorResume(e -> Mono.just(ResponseEntity.status(500).body(e.getMessage())))
            .block()
        ;
    }

    private UpdateBannerAvatarResponseDTO getUpdateBannerAvatarResponse(Boolean success){
        return new UpdateBannerAvatarResponseDTO(
        "POST", "/api/profiles/update/", success
        );
    }
}
