package project.musicapp.api.albums.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.albums.dto.AlbumCreateDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.service.AlbumService;

@RestController
@RequestMapping("/albums")
public class AlbumController {
    private final AlbumService albumService;

    @Autowired
    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @GetMapping("/{id}")
    public AlbumUserSongsDTO findAlbumUserSongsById(@PathVariable int id) {
        return this.albumService.findAlbumUserSongsById(id);
    }

    @PostMapping("/create")
    public void createAlbum(@RequestHeader HttpHeaders headers,
                            @RequestBody AlbumCreateDTO albumCreateDTO) {
        this.albumService.createAlbum(headers, albumCreateDTO);
    }
}
