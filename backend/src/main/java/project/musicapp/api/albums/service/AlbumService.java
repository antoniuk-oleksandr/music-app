package project.musicapp.api.albums.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumCreateDTO;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AlbumService {
    private final UserService userService;
    private final AlbumQueryService albumQueryService;
    private final AccessTokenService accessTokenService;

    public List<AlbumUserSongsDTO> findAllAlbumsByUserId(int userId, int limit, int offset){
        return this.albumQueryService.getAlbumsByUserId(userId, limit, offset);
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        return this.albumQueryService.findAllAlbumsByName(value, limit, offset);
    }

    public AlbumUserSongsDTO findAlbumUserSongsById(int id) {
        return this.albumQueryService.getAlbumUserSongsByAlbumId(id);
    }

    public void createAlbum(HttpHeaders headers, AlbumCreateDTO albumCreateDTO) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        User user = this.userService.getUserFromAccessToken(accessToken).orElseThrow(
            () -> new IllegalArgumentException("Invalid access token")
        );
        this.albumQueryService.createAlbum(albumCreateDTO, user);
    }
}
