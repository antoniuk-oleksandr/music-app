package project.musicapp.api.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.service.PlaylistService;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.search.mapper.SearchMapper;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.service.UserService;

import java.util.List;

@Service
public class SearchService {
    private final SongService songService;
    private final UserService userService;
    private final PlaylistService playlistService;

    @Autowired
    public SearchService(SongService songService,
                         UserService usersService,
                         PlaylistService playlistService) {
        this.songService = songService;
        this.userService = usersService;
        this.playlistService = playlistService;
    }

    private List<UserDTO> getUsers(String value, int limit, int offset){
        return this.userService.findAllUsersByUsername(value, limit, offset);
    }

    private List<SongUsersDTO> getSongs(String value, int limit, int offset){
        return this.songService.findAllSongUsersBySongName(value, limit, offset);
    }

    private List<PlaylistDTO> getPlaylists(String value, int limit, int offset){
        return this.playlistService.findAllPlayListsByName(value, limit, offset);
    }

    public ResponseEntity<SearchDTO> search(String value, int limit, int offset) {
        return ResponseEntity.ok().body(SearchMapper.builder()
                .users(getUsers(value, limit, offset))
                .songs(getSongs(value, limit, offset))
                .playlists(getPlaylists(value, limit, offset))
                .build().toSearchDTO());
    }
}