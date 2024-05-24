package project.musicapp.api.albums.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.mapper.AlbumUserSongsMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AlbumService {
    private final AlbumQueryService albumQueryService;

    public AlbumUserSongsDTO findAlbumUserSongsById(int id) {
        return AlbumUserSongsMapper.builder()
                .user(albumQueryService.getUserByAlbumId(id))
                .album(albumQueryService.getAlbumByAlbumId(id))
                .songs(albumQueryService.getSongsByAlbumId(id))
                .build().toAlbumUserSongsDTO();
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        return albumQueryService.findAllAlbumsByName(value, limit, offset);
    }
}
