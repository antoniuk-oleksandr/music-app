package project.musicapp.api.profiles.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileDTO;
import java.util.ArrayList;

@Service
public class ProfileService {
    public ProfileQueryService profileQueryService;

    @Autowired
    public ProfileService(ProfileQueryService profileQueryService) {
        this.profileQueryService = profileQueryService;
    }

    public ProfileDTO getProfileById(int id) {
        return ProfileDTO.builder()
                .user(profileQueryService.findUserBannerByUserId(id))
                .songs(profileQueryService.findUserSongsByUserId(id))
                .playlists(profileQueryService.findPlaylistsByUserId(id))
                .albums(profileQueryService.findAlbumsByUserId(id))
                .build();
    }
}
