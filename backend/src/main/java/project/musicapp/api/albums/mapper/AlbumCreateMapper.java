package project.musicapp.api.albums.mapper;

import project.musicapp.api.albums.dto.AlbumCreateDTO;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.users.model.User;

import java.sql.Timestamp;

public class AlbumCreateMapper {
    private final User user;
    private final AlbumCreateDTO albumCreateDTO;

    public AlbumCreateMapper(AlbumCreateDTO albumCreateDTO, User user) {
        this.user = user;
        this.albumCreateDTO = albumCreateDTO;
    }

    public Album toAlbum() {
        return Album.builder()
                .name(this.albumCreateDTO.getName())
                .date(new Timestamp(System.currentTimeMillis()))
                .creator(this.user)
                .imagePath("empty.jpg")
                .build();
    }
}

