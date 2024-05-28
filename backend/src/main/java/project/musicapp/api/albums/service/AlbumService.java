package project.musicapp.api.albums.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AlbumService {
    private final AlbumQueryService albumQueryService;

    public List<AlbumUserSongsDTO> findAllAlbumsByUserId(int userId){
        return this.albumQueryService.getAlbumsByUserId(userId);
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        return this.albumQueryService.findAllAlbumsByName(value, limit, offset);
    }

    public AlbumUserSongsDTO findAlbumUserSongsById(int id) {
        return this.albumQueryService.getAlbumUserSongsByAlbumId(id);
    }
}
