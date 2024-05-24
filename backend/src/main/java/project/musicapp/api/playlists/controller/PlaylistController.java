package project.musicapp.api.playlists.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
