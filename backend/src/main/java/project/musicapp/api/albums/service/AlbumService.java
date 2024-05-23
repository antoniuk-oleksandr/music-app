package project.musicapp.api.albums.service;

import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.mapper.AlbumMapper;
import project.musicapp.api.albums.repository.AlbumRepository;

import java.util.List;

@Service
public class AlbumService {
    private final AlbumRepository albumRepository;

    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    private List<Object[]> getAlbums(String value, int limit, int offset){
        return this.albumRepository.findAllAlbumsByName(value, limit, offset);
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        List<Object[]> albums = getAlbums(value, limit, offset);
        return new AlbumMapper(albums).toAlbumDTOs();
    }
}
