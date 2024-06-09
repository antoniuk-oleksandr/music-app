package project.musicapp.api.playlists.mapper;

import project.musicapp.api.playlists.dto.PlaylistCreateDTO;
import project.musicapp.api.playlists.model.Playlist;
import project.musicapp.api.users.model.User;

import java.sql.Timestamp;

public class PlaylistCreateMapper {
    private final User user;
    private final PlaylistCreateDTO playlistCreateDTO;

    public PlaylistCreateMapper(PlaylistCreateDTO playlistCreateDTO, User user) {
        this.user = user;
        this.playlistCreateDTO = playlistCreateDTO;
    }

    public Playlist toPlaylist() {
        return Playlist.builder()
                .name(playlistCreateDTO.getName())
                .creatingDate(new Timestamp(System.currentTimeMillis()))
                .isPublic(playlistCreateDTO.getIsPublic())
                .imagePath(user.getAvatar())
                .user(user)
                .build();
    }
}
