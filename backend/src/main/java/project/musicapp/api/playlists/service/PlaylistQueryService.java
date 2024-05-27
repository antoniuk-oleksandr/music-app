package project.musicapp.api.playlists.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.mapper.PlaylistMapper;
import project.musicapp.api.playlists.mapper.PlaylistUserSongsMapper;
import project.musicapp.api.playlists.model.Playlist;
import project.musicapp.api.playlists.repository.PlaylistRepository;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaylistQueryService {
    private final SongService songService;
    private final UserRepository userRepository;
    private final PlaylistRepository playlistRepository;

    public List<SongUserDTO> getSongsByPlaylistId(int id){
        List<SongUserDTO> songsUsers = new ArrayList<>();
        List<Integer> songIndices = this.playlistRepository.findAllSongsByPlaylistId(id);
        for (Integer songId : songIndices) {
            SongUserDTO songUserDTO = songService.findSongUserById(songId);
            songsUsers.add(songUserDTO);
        }
        return songsUsers;
    }

    public User getUserByPlaylistId(int id) {
        Playlist playlist = getPlaylistByPlaylistId(id);
        Integer creatorId = playlist.getUser().getId();
        return this.userRepository.findById(creatorId).orElse(null);
    }

    public Playlist getPlaylistByPlaylistId(int id) {
        return this.playlistRepository.findById(id).orElse(null);
    }

    public PlaylistUserSongsDTO findPlaylistUserSongsById(int id){
        return PlaylistUserSongsMapper.builder()
                .user(getUserByPlaylistId(id))
                .playlist(getPlaylistByPlaylistId(id))
                .songs(getSongsByPlaylistId(id))
                .build().toAlbumUserSongsDTO();
    }

    public List<PlaylistUserSongsDTO> getAllPlaylistUserSongsByUserId(int id){
        List<Integer> playlistIds = this.playlistRepository.findAllPlaylistIdsByUserId(id);
        List<PlaylistUserSongsDTO> playlists = new ArrayList<>(playlistIds.size());

        for(Integer playlistId : playlistIds){
            PlaylistUserSongsDTO playlist = findPlaylistUserSongsById(playlistId);
            playlists.add(playlist);
        }

        return playlists;
    }

    public List<PlaylistDTO> findAllPlayListsByName(String value, int limit, int offset){
        List<Object[]> playlists = this.playlistRepository.findAllPlaylistsByName(value, limit, offset);
        return new PlaylistMapper(playlists).toPlaylistDTOs();
    }
}
