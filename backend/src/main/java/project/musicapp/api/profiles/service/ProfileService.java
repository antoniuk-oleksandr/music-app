package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;
import project.musicapp.api.profiles.dto.UpdateBannerAvatarResponseDTO;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileByDataTypeService profileDataService;
    private final ProfileByTokenService profileByTokenService;
    private final ProfileBannerAvatarService profileBannerAvatarService;

    public ResponseEntity<?> getProfileUserById(HttpHeaders headers, int userId) {
        return this.profileDataService.getProfileUserById(headers, userId);
    }

    public ProfileDTO getProfileByIdAndType(String profileType, int userId, int limit, int offset) {
        return this.profileDataService.getProfileByTypeAndUserId(profileType, userId, limit, offset);
    }

    public UpdateBannerAvatarResponseDTO updateBannerOrAvatar(HttpHeaders header, String bannerOrAvatarType, MultipartFile file) {
        return this.profileBannerAvatarService.updateBannerOrAvatar(header, bannerOrAvatarType, file);
    }

    public ResponseEntity<?> getProfileInfoByAccessToken(HttpHeaders headers) {
        return this.profileByTokenService.getProfileInfoByToken(headers);
    }
}
