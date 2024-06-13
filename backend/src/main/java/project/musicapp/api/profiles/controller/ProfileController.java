package project.musicapp.api.profiles.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;
import project.musicapp.api.profiles.dto.UpdateBannerAvatarResponseDTO;
import project.musicapp.api.profiles.service.ProfileService;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getProfileById(@RequestHeader HttpHeaders headers,
                                         @PathVariable int userId) {
        return this.profileService.getProfileUserById(headers, userId);
    }

    @GetMapping("/{userId}/{profileType}")
    public ProfileDTO getProfileByDataType(@PathVariable String profileType,
                                           @PathVariable int userId,
                                           @RequestParam int limit,
                                           @RequestParam int offset) {
        return this.profileService.getProfileByIdAndType(profileType, userId, limit, offset);
    }

    @PatchMapping("/update/{bannerAvatarType}")
    public UpdateBannerAvatarResponseDTO updateBannerAvatar(@RequestHeader HttpHeaders headers,
                                                            @PathVariable String bannerAvatarType,
                                                            @RequestParam MultipartFile file) {
        return this.profileService.updateBannerOrAvatar(headers, bannerAvatarType, file);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getProfileByToken(@RequestHeader HttpHeaders headers) {
        return this.profileService.getProfileInfoByAccessToken(headers);
    }
}
