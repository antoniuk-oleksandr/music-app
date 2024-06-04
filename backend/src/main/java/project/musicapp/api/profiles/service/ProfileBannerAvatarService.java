package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.type.BannerAvatarType;
import project.musicapp.api.users.service.UserService;

@Service
@RequiredArgsConstructor
public class ProfileBannerAvatarService {
    private final UserService userService;

    public ResponseEntity<?> updateBannerOrAvatar(int profileId, String bannerOrAvatarType, String path) {
        BannerAvatarType bannerAvatarType = BannerAvatarType.valueOf(bannerOrAvatarType.toUpperCase());

        return switch (bannerAvatarType) {
            case BANNER -> {
                this.userService.updateUserBannerByUserId(profileId, path);
                yield ResponseEntity.ok().body("Successfully updated profile banner avatar");
            }
            case AVATAR -> {
                this.userService.updateUserAvatarByUserId(profileId, path);
                yield ResponseEntity.ok().body("Successfully updated profile avatar");
            }
        };
    }
}
