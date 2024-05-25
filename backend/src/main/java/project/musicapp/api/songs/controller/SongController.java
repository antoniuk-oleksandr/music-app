package project.musicapp.api.songs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.service.SongService;

import java.util.List;

@RestController
@RequestMapping("/songs")
public class SongController {
    private final SongService songService;

    @Autowired
    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping("/{id}")
    public SongUserDTO findSongUserById(@PathVariable int id) {
        return this.songService.findSongUserById(id);
    }

    @GetMapping
    public List<SongUserDTO> findAllSongUsers(@RequestParam String name,
                                              @RequestParam int limit,
                                              @RequestParam int offset) {
        return this.songService.findAllSongUsersBySongName(name, limit, offset);
    }
}
