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

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SongUserQueryService {
    private final UserService userService;
    private final SongRepository songRepository;
    private final SongUserRepository songUserRepository;

    public SongUserDTO findSongUserById(int id) {
        Song song = this.songRepository.findById(id).orElse(new Song());
        List<UserDTO> users = this.userService.findAllUsersBySongId(song.getId());
        return new SongUserMapper(song, users).toSongUserDTO();
    }

    private List<SongUserDTO> getSongUsersByIndices(List<Integer> indices) {
        return indices.stream().map(this::findSongUserById).collect(Collectors.toList());
    }

    public List<SongUserDTO> findSongUserByUserId(int id) {
        List<Integer> songIndices = this.songUserRepository.findAllUserSongsIndicesByUserId(id);
        return getSongUsersByIndices(songIndices);
    }

    public List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        List<Integer> songIndices = this.songUserRepository.findAllSongsUsersIndicesBySongName(value, limit, offset);
        return getSongUsersByIndices(songIndices);
    }
}
