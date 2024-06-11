package project.musicapp.api.playlists.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.playlists.dto.*;
import project.musicapp.api.playlists.model.Playlist;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaylistService {
    private final SongService songService;
    private final UserService userService;
    private final AccessTokenService accessTokenService;
    private final PlaylistQueryService playlistQueryService;

    public PlaylistUserSongsDTO findPlaylistUserSongsById(int id){
        return this.playlistQueryService.findPlaylistUserSongsById(id);
    }

    public List<PlaylistUserSongsDTO> findAllPlaylistUserSongsByUserId(int userId, int limit, int offset){
        return this.playlistQueryService.getAllPlaylistUserSongsByUserId(userId, limit, offset);
    }

    public List<PlaylistDTO> findAllPlayListsByName(String value, int limit, int offset){
        return this.playlistQueryService.findAllPlayListsByName(value, limit, offset);
    }

    public ResponseEntity<?> createPlaylist(HttpHeaders header,
                                            PlaylistCreateDTO playlistCreateDTO) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(header);
        User user = this.userService.getUserFromAccessToken(accessToken).orElseThrow(
            () -> new IllegalArgumentException("Invalid access token")
        );
        return createPlaylistWithResponse(playlistCreateDTO, user);
    }

    private ResponseEntity<?> createPlaylistWithResponse(
            PlaylistCreateDTO playlistCreateDTO, User user) {
        if (this.playlistQueryService.isPresentPlaylist(playlistCreateDTO, user)){
            return ResponseEntity.badRequest().body(
                new PlaylistResponseDTO("POST", "Playlist already exists", false)
            );
        }
        Playlist playlist = this.playlistQueryService.createPlaylist(playlistCreateDTO, user);

        return ResponseEntity.ok().body(new PlaylistIdDTO(playlist.getId()));
    }

    public ResponseEntity<?> addSongToPlaylist(HttpHeaders headers, int playlistId, int songId) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        User userFromToken = this.userService.getUserFromAccessToken(accessToken).orElseThrow(
            () -> new IllegalArgumentException("Invalid access token")
        );

        Playlist playlist = this.playlistQueryService.getPlaylistByPlaylistId(playlistId);
        User userFromPlaylist = playlist.getUser();

        if(!userFromToken.getUsername().equals(userFromPlaylist.getUsername())){
            return ResponseEntity.ok().body(
                new PlaylistResponseDTO("POST", "User isn't playlist creator", false)
            );
        }

        int userSongId = this.songService.findFirstUserSongIdBySongId(songId);
        this.playlistQueryService.addSongToPlaylist(playlistId, userSongId);

        return ResponseEntity.ok().body(
            new PlaylistResponseDTO("POST", "Song added successfully", true)
        );
    }

    public ResponseEntity<?> removeSongFromPlaylist(HttpHeaders headers, int playlistId, int songId) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        User userFromToken = this.userService.getUserFromAccessToken(accessToken).orElseThrow(
                () -> new IllegalArgumentException("Invalid access token")
        );

        Playlist playlist = this.playlistQueryService.getPlaylistByPlaylistId(playlistId);
        User userFromPlaylist = playlist.getUser();

        if(!userFromToken.getUsername().equals(userFromPlaylist.getUsername())){
            return ResponseEntity.ok().body(
                new PlaylistResponseDTO("DELETE", "User isn't playlist creator", false)
            );
        }

        int userSongId = this.songService.findFirstUserSongIdBySongId(songId);
        this.playlistQueryService.deleteSongFromPlaylist(playlistId, userSongId);

        return ResponseEntity.ok().body(
            new PlaylistResponseDTO("DELETE", "Song deleted successfully", true)
        );
    }
}
