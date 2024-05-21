package project.musicapp.api.songs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/songs")
public class SongController {
    @GetMapping("/{songId}")
    public getSongs(@PathVariable long songId) {}
}
