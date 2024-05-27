package project.musicapp.api.profiles.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileDTO;

@Service
public class ProfileService {
    public ProfileQueryService profileQueryService;

    @Autowired
    public ProfileService(ProfileQueryService profileQueryService) {
        this.profileQueryService = profileQueryService;
    }

    public ProfileDTO getProfileById(int id) {
        return this.profileQueryService.getProfileById(id);
    }
}
