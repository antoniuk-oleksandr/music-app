package project.musicapp.api.songs.service;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.albums.dto.AlbumNameDTO;
import project.musicapp.api.albums.service.AlbumCreatorService;
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
    private final AlbumCreatorService albumCreatorService;
    private final SongRepository songRepository;
    private final SongUserRepository songUserRepository;

    private List<SongUserDTO> getSongUsersByIndices(List<Integer> indices) {
        return indices.stream().map(this::findSongUserBySongId).collect(Collectors.toList());
    }

    public List<SongUserDTO> findSongUserByUserId(int userId, int limit, int offset) {
        List<Integer> songIndices = this.songUserRepository.findAllUserSongsIndicesByUserId(userId, limit, offset);
        return getSongUsersByIndices(songIndices);
    }

    public List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        List<Integer> songIndices = this.songUserRepository.findAllSongsUsersIndicesBySongName(value, limit, offset);
        return getSongUsersByIndices(songIndices);
    }

    public SongUserDTO findSongUserBySongId(int id) {
        Song song = this.songRepository.findById(id).orElse(new Song());
        AlbumNameDTO album = this.albumCreatorService.getAlbumCreatorBySongId(song.getId());
        List<UserDTO> users = this.userService.findAllUsersBySongId(song.getId());
        return SongUserMapper.builder()
                .song(song).album(album).users(users)
                .build().toSongUserDTO();
    }
}
