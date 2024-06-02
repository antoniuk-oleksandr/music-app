package project.musicapp.api.profiles.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;

@Service
public class ProfileService {
    private final ProfileDataService profileDataService;

    @Autowired
    public ProfileService(ProfileDataService profileDataService) {
        this.profileDataService = profileDataService;
    }

    public ProfileUserDTO getProfileUserById(int userId) {
        return this.profileDataService.getProfileUserById(userId);
    }

    public ProfileDTO getProfileByIdAndType(String profileType, int userId, int limit, int offset) {
        return this.profileDataService.getProfileByTypeAndUserId(profileType, userId, limit, offset);
    }

    public ResponseEntity<?> updateBannerOrAvatar(int profileId, String bannerOrAvatarType) {
        return null;
    }
}
