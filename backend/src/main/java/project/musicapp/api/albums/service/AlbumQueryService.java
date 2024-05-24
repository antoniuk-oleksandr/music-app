package project.musicapp.api.albums.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.mapper.AlbumMapper;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.albums.repository.AlbumRepository;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.mapper.SongUserMapper;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.List;

@Service
public class AlbumQueryService {
    private final AlbumRepository albumRepository;
    private final UserRepository userRepository;

    @Autowired
    public AlbumQueryService(AlbumRepository albumRepository,
                             UserRepository userRepository) {
        this.albumRepository = albumRepository;
        this.userRepository = userRepository;
    }

    public List<SongUserDTO> getSongsByAlbumId(int id){
        List<Object[]> songs = this.albumRepository.findAllSongsByAlbumId(id);
        return new SongUserMapper(songs).toListSongUserDTO();
    }

    public User getUserByAlbumId(int id) {
        Album album = getAlbumByAlbumId(id);
        Integer creatorId = album.getCreator().getId();
        return this.userRepository.findById(creatorId).orElse(null);
    }

    public Album getAlbumByAlbumId(int id) {
        return this.albumRepository.findById(id).orElse(null);
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        List<Object[]> albums = this.albumRepository.findAllAlbumsByName(value, limit, offset);
        return new AlbumMapper(albums).toAlbumDTOs();
    }
}
