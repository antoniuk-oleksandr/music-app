package project.musicapp.api.songs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.songs.dto.SongUserDTO;

import java.util.List;

@Service
public class SongService {
    private final SongUserQueryService songUserQueryService;

    @Autowired
    public SongService(SongUserQueryService songUserQueryService) {
        this.songUserQueryService = songUserQueryService;
    }

    public SongUserDTO findSongUserById(int id) {
        return this.songUserQueryService.findSongUserById(id);
    }

    public List<SongUserDTO> findAllSongUsersByUserId(int userId) {
        return this.songUserQueryService.findSongUserByUserId(userId);
    }

    public List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        return this.songUserQueryService.findAllSongUsersBySongName(value, limit, offset);
    }
}
