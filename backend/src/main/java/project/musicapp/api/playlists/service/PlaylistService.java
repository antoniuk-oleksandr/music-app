package project.musicapp.api.playlists.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.mapper.PlaylistUserSongsMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaylistService {
    private final PlaylistQueryService playlistQueryService;

    public PlaylistUserSongsDTO findPlaylistUserSongsById(int id){
        return PlaylistUserSongsMapper.builder()
                .user(playlistQueryService.getUserByPlaylistId(id))
                .playlist(playlistQueryService.getPlaylistByPlaylistId(id))
                .songs(playlistQueryService.getSongsByPlaylistId(id))
                .build().toAlbumUserSongsDTO();
    }

    public List<PlaylistDTO> findAllPlayListsByName(String value, int limit, int offset){
        return this.playlistQueryService.findAllPlayListsByName(value, limit, offset);
    }
}
