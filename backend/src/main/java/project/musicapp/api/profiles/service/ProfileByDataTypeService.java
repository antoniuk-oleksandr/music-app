package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;
import project.musicapp.api.profiles.type.ProfileType;

@Service
@RequiredArgsConstructor
public class ProfileByDataTypeService {
    private final ProfileQueryService profileQueryService;

    public ProfileUserDTO getProfileUserById(int id){
        return ProfileUserDTO.builder()
                .user(this.profileQueryService.findUserBannerByUserId(id))
                .songs(this.profileQueryService.findUserSongsByUserId(id, 5, 0))
                .albums(this.profileQueryService.findAlbumsByUserId(id, 6, 0))
                .playlists(this.profileQueryService.findPlaylistsByUserId(id, 6, 0)).build();
    }

    public ProfileDTO getProfileByTypeAndUserId(String type, int userId, int limit, int offset){
        ProfileType profileType = ProfileType.valueOf(type.toUpperCase());

        return switch (profileType) {
            case SONGS -> ProfileDTO.builder()
                    .songs(this.profileQueryService.findUserSongsByUserId(userId, limit, offset))
                    .build();
            case ALBUMS -> ProfileDTO.builder()
                    .albums(this.profileQueryService.findAlbumsByUserId(userId, limit, offset))
                    .build();
            case PLAYLISTS -> ProfileDTO.builder()
                    .playlists(this.profileQueryService.findPlaylistsByUserId(userId, limit, offset))
                    .build();
        };
    }
}
