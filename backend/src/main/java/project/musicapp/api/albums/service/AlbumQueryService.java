package project.musicapp.api.albums.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.mapper.AlbumObjectMapper;
import project.musicapp.api.albums.mapper.AlbumUserSongsMapper;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.albums.repository.AlbumRepository;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlbumQueryService {
    private final SongService songService;
    private final UserRepository userRepository;
    private final AlbumRepository albumRepository;

    public List<SongUserDTO> getSongsByAlbumId(int id){
        return this.albumRepository.findAllSongsByAlbumId(id).stream()
                .map(this.songService::findSongUserBySongId)
                .collect(Collectors.toList());
    }

    public User getUserByAlbumId(int id) {
        Album album = getAlbumByAlbumId(id);
        Integer creatorId = album.getCreator().getId();
        return this.userRepository.findById(creatorId).orElse(null);
    }

    public Album getAlbumByAlbumId(int id) {
        return this.albumRepository.findById(id).orElse(null);
    }

    public List<AlbumUserSongsDTO> getAlbumsByUserId(int id) {
        return this.albumRepository.findAllAlbumsByUserId(id).stream()
                .map(this::getAlbumUserSongsByAlbumId)
                .collect(Collectors.toList());
    }

    public AlbumUserSongsDTO getAlbumUserSongsByAlbumId(int id) {
        return AlbumUserSongsMapper.builder()
                .user(getUserByAlbumId(id))
                .album(getAlbumByAlbumId(id))
                .songs(getSongsByAlbumId(id))
                .build().toAlbumUserSongsDTO();
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        List<Object[]> albums = this.albumRepository.findAllAlbumsByName(value, limit, offset);
        return new AlbumObjectMapper(albums).toAlbumDTOs();
    }
}
