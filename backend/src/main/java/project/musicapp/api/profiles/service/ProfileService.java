package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileByDataTypeService profileDataService;
    private final ProfileBannerAvatarService profileBannerAvatarService;

    public ProfileUserDTO getProfileUserById(int userId) {
        return this.profileDataService.getProfileUserById(userId);
    }

    public ProfileDTO getProfileByIdAndType(String profileType, int userId, int limit, int offset) {
        return this.profileDataService.getProfileByTypeAndUserId(profileType, userId, limit, offset);
    }

    public ResponseEntity<?> updateBannerOrAvatar(int profileId, String bannerOrAvatarType, String path) {
        return this.profileBannerAvatarService.updateBannerOrAvatar(profileId, bannerOrAvatarType, path);
    }
}
