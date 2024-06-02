package project.musicapp.api.profiles.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;
import project.musicapp.api.profiles.service.ProfileService;

@RestController
@RequestMapping("profiles")
public class ProfileController {
    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{userId}")
    public ProfileUserDTO getProfileById(@PathVariable int userId) {
        return this.profileService.getProfileUserById(userId);
    }

    @GetMapping("/{userId}/{profileType}")
    public ProfileDTO getProfileByDataType(@PathVariable String profileType,
                                           @PathVariable int userId,
                                           @RequestParam int limit,
                                           @RequestParam int offset) {
        return this.profileService.getProfileByIdAndType(profileType, userId, limit, offset);
    }

    @PatchMapping("/{userId}/{bannerAvatarType}")
    public ResponseEntity<?> updateBannerAvatar(@PathVariable int userId,
                                                @PathVariable String bannerAvatarType,
                                                @RequestBody String path) {
        return this.profileService.updateBannerOrAvatar(userId, bannerAvatarType);
    }
}
