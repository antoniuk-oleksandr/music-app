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

    public SongUserDTO findSongUserBySongId(int id) {
        return this.songUserQueryService.findSongUserBySongId(id);
    }

    public List<SongUserDTO> findAllSongUsersByUserId(int userId, int limit, int offset) {
        return this.songUserQueryService.findSongUserByUserId(userId, limit, offset);
    }

    public List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        return this.songUserQueryService.findAllSongUsersBySongName(value, limit, offset);
    }
}
