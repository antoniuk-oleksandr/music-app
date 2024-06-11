package project.musicapp.api.songs.mapper;

import project.musicapp.api.albums.dto.AlbumNameDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

public class SongUserMapper {
    public static SongUserDTO toSongUserDTO(Song song, AlbumNameDTO album, List<UserDTO> users) {
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
