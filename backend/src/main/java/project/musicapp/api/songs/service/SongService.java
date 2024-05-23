package project.musicapp.api.songs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.songs.mapper.SongUserMapper;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.songs.repository.SongUserRepository;

import java.util.List;

@Service
public class SongService {
    private final SongUserRepository songUserRepository;

    @Autowired
    public SongService(SongUserRepository songUserRepository) {
        this.songUserRepository = songUserRepository;
    }

    private List<Object[]> getSongsObjects(String value, int limit, int offset) {
        return this.songUserRepository.findAllSongUsersBySongName(value, limit, offset);
    }

    public List<SongUsersDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        List<Object[]> songsObjects = getSongsObjects(value, limit, offset);
        return new SongUserMapper(songsObjects).toListSongUserDTO();
    }
}
