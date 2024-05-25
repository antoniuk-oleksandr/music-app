package project.musicapp.api.songs.mapper;

import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

public class SongUserMapper {
    private final Song song;
    private final List<UserDTO> users;

    public SongUserMapper(Song song, List<UserDTO> users) {
        this.song = song;
        this.users = users;
    }

    public SongUserDTO toSongUserDTO() {
        return SongUserDTO.builder()
                .id(song.getId())
                .name(song.getName())
                .releaseDate(song.getReleaseDate())
                .duration(song.getDuration())
                .imagePath(song.getImagePath())
                .songPath(song.getSongPath())
                .users(users).build();
    }
}
