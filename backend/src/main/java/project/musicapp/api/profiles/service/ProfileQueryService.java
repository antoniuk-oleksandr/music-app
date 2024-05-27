package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.service.AlbumService;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.service.PlaylistService;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileQueryService {
    private final UserService userService;
    private final SongService songService;
    private final AlbumService albumService;
    private final PlaylistService playlistService;

    private UserBannerDTO findUserBannerByUserId(int id){
        return this.userService.findUserBannerById(id);
    }

    private List<SongUserDTO> findUserSongsByUserId(int id){
        return this.songService.findAllSongUsersByUserId(id);
    }

    private List<AlbumUserSongsDTO> findAlbumsByUserId(int id) {
        return this.albumService.findAllAlbumsByUserId(id);
    }

    private List<PlaylistUserSongsDTO> findPlaylistsByUserId(int id){
        return this.playlistService.findAllPlaylistUserSongsByUserId(id);
    }

    public ProfileDTO getProfileById(int id) {
        return ProfileDTO.builder()
                .user(findUserBannerByUserId(id))
                .songs(findUserSongsByUserId(id))
                .playlists(findPlaylistsByUserId(id))
                .albums(findAlbumsByUserId(id)).build();
    }
}
