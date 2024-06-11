package project.musicapp.api.songs.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.songs.dto.CreateSongDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.model.SongUser;
import project.musicapp.api.songs.repository.SongUserRepository;
import project.musicapp.api.songs.service.SongService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("songs")
@RequiredArgsConstructor
public class SongController {
    private final SongService songService;
    private final SongUserRepository songUserRepository;

    @GetMapping("/{id}")
    public SongUserDTO findSongUserById(@PathVariable int id) {
        return this.songService.findSongUserBySongId(id);
    }

    @GetMapping
    public List<SongUserDTO> findAllSongUsers(@RequestParam String name,
                                              @RequestParam int limit,
                                              @RequestParam int offset) {
        return this.songService.findAllSongUsersBySongName(name, limit, offset);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createSongUser(@RequestHeader HttpHeaders headers,
                                            @RequestPart CreateSongDTO songData,
                                            @RequestPart MultipartFile mp3,
                                            @RequestPart MultipartFile picture) {
        return this.songService.createSongWithUserInfo(headers, songData, mp3, picture);
    }
}