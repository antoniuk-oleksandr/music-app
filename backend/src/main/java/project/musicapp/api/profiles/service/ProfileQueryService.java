package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.service.AlbumService;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.service.PlaylistService;
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

    public UserBannerDTO findUserBannerByUserId(int id){
        return this.userService.findUserBannerById(id);
    }

    public List<SongUserDTO> findUserSongsByUserId(int id){
        return this.songService.findAllSongUsersByUserId(id);
    }

    public List<AlbumDTO> findAlbumsByUserId(int id) {
        return this.albumService.findAllAlbumsByUserId(id);
    }

    public List<PlaylistDTO> findPlaylistsByUserId(int id){
        return null;
    }
}
