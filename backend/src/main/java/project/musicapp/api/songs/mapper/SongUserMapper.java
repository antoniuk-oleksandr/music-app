package project.musicapp.api.songs.mapper;

import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

public class SongUserMapper {
    private final Song song;
    private final AlbumCreatorDTO album;
    private final List<UserDTO> users;

    public SongUserMapper(Song song, AlbumCreatorDTO album, List<UserDTO> users) {
        this.song = song;
        this.album = album;
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
                .album(album)
                .users(users).build();
    }
}
