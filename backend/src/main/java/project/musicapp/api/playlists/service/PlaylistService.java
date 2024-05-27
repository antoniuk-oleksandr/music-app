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
        return playlistQueryService.findPlaylistUserSongsById(id);
    }

    public List<PlaylistUserSongsDTO> findAllPlaylistUserSongsByUserId(int id){
        return playlistQueryService.getAllPlaylistUserSongsByUserId(id);
    }

    public List<PlaylistDTO> findAllPlayListsByName(String value, int limit, int offset){
        return this.playlistQueryService.findAllPlayListsByName(value, limit, offset);
    }
}
