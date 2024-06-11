package project.musicapp.api.playlists.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.playlists.dto.PlaylistCreateDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.service.PlaylistService;

@RestController
@RequestMapping("/playlists")
public class PlaylistController {
    private final PlaylistService playlistService;

    @Autowired
    public PlaylistController(PlaylistService playlistService) {
        this.playlistService = playlistService;
    }

    @GetMapping("/{id}")
    public PlaylistUserSongsDTO findPlaylistUserSongsById(@PathVariable int id) {
        return this.playlistService.findPlaylistUserSongsById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPlaylist(@RequestHeader HttpHeaders headers,
                                                              @RequestBody PlaylistCreateDTO playlistCreateDTO) {
        return this.playlistService.createPlaylist(headers, playlistCreateDTO);
    }

    @PostMapping("/{playlistId}")
    public ResponseEntity<?> addSongsToPlaylist(@RequestHeader HttpHeaders headers,
                                                @PathVariable Integer playlistId,
                                                @RequestParam("songId") Integer songUserId) {
        return this.playlistService.addSongToPlaylist(headers, playlistId, songUserId);
    }

    @DeleteMapping("/{playlistId}")
    public ResponseEntity<?> deleteSongFromPlaylist(@RequestHeader HttpHeaders headers,
                                                    @PathVariable Integer playlistId,
                                                    @RequestParam("songId") Integer songUserId) {
        return this.playlistService.removeSongFromPlaylist(headers, playlistId, songUserId);
    }
}
