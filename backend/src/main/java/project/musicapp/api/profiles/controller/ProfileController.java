package project.musicapp.api.profiles.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.service.ProfileService;

@RestController
@RequestMapping("profiles")
public class ProfileController {
    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{id}")
    public ProfileDTO getProfileById(@PathVariable int id) {
        return this.profileService.getProfileById(id);
    }
}
