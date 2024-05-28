package project.musicapp.api.albums.service;

import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.albums.mapper.AlbumCreatorMapper;
import project.musicapp.api.albums.repository.AlbumRepository;

import java.util.List;

@Service
public class AlbumCreatorService {
    private final AlbumRepository albumRepository;

    public AlbumCreatorService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    public AlbumCreatorDTO getAlbumCreatorBySongId(int id) {
        List<Object[]> albumCreator = this.albumRepository.findAlbumBySongId(id);
        return new AlbumCreatorMapper(albumCreator).toAlbumCreatorDTO();
    }
}
