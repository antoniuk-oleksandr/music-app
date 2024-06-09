package project.musicapp.api.playlists.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.playlists.dto.PlaylistCreateDTO;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.mapper.PlaylistCreateMapper;
import project.musicapp.api.playlists.mapper.PlaylistMapper;
import project.musicapp.api.playlists.mapper.PlaylistUserSongsMapper;
import project.musicapp.api.playlists.model.Playlist;
import project.musicapp.api.playlists.repository.PlaylistRepository;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.impl.SongServiceImpl;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaylistQueryService {
    private final SongServiceImpl songService;
    private final UserRepository userRepository;
    private final PlaylistRepository playlistRepository;

    public List<SongUserDTO> getSongsByPlaylistId(int id){
        return this.playlistRepository
                .findAllSongsByPlaylistId(id).stream()
                .map(this.songService::findSongUserBySongId)
                .collect(Collectors.toList());
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

    public List<PlaylistUserSongsDTO> getAllPlaylistUserSongsByUserId(int userId, int limit, int offset){
        return this.playlistRepository
                .findAllPlaylistIdsByUserId(userId, limit, offset).stream()
                .map(this::findPlaylistUserSongsById)
                .collect(Collectors.toList());
    }

    public List<PlaylistDTO> findAllPlayListsByName(String value, int limit, int offset){
        List<Object[]> playlists = this.playlistRepository.findAllPlaylistsByName(value, limit, offset);
        return new PlaylistMapper(playlists).toPlaylistDTOs();
    }

    public void createPlaylist(PlaylistCreateDTO playlistCreateDTO, User user) {
        this.playlistRepository.save(
            new PlaylistCreateMapper(playlistCreateDTO, user).toPlaylist()
        );
    }

    public boolean isPresentPlaylist(PlaylistCreateDTO playlistCreateDTO, User user) {
        return this.playlistRepository.findByNameAndUserId(
            playlistCreateDTO.getName(), user.getId()
        ).isPresent();
    }
}
