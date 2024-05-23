package project.musicapp.api.search.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.service.AlbumService;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.service.PlaylistService;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchQueryService {
    private final SongService songService;
    private final UserService userService;
    private final PlaylistService playlistService;
    private final AlbumService albumService;

    public List<UserDTO> getProfiles(String value, int limit, int offset) {
        return this.userService.findAllUsersByUsernameAndFlag(value, limit, offset, false);
    }

    public List<UserDTO> getArtists(String value, int limit, int offset) {
        return this.userService.findAllUsersByUsernameAndFlag(value, limit, offset, true);
    }

    public List<SongUsersDTO> getSongs(String value, int limit, int offset) {
        return this.songService.findAllSongUsersBySongName(value, limit, offset);
    }

    public List<PlaylistDTO> getPlaylists(String value, int limit, int offset) {
        return this.playlistService.findAllPlayListsByName(value, limit, offset);
    }

    public List<AlbumDTO> getAlbums(String value, int limit, int offset) {
        return this.albumService.findAllAlbumsByName(value, limit, offset);
    }
}
