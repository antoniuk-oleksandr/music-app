package project.musicapp.api.songs.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.mapper.SongUserMapper;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.songs.repository.SongRepository;
import project.musicapp.api.songs.repository.SongUserRepository;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.service.UserService;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SongUserQueryService {
    private final UserService userService;
    private final SongRepository songRepository;
    private final SongUserRepository songUserRepository;

    public SongUserDTO findSongUserByName(int id) {
        Song song = this.songRepository.findById(id).orElse(new Song());
        List<UserDTO> users = this.userService.findAllUsersBySongId(song.getId());
        return new SongUserMapper(song, users).toSongUserDTO();
    }

    public List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        List<SongUserDTO> songsUsers = new ArrayList<>();
        List<Integer> songIndices = songUserRepository.findAllSongsUsersIndicesBySongName(value, limit, offset);

        for (Integer songIndex : songIndices) {
            songsUsers.add(findSongUserByName(songIndex));
        }

        return songsUsers;
    }
}
