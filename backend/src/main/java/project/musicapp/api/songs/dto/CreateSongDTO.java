package project.musicapp.api.songs.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
public class CreateSongDTO {
    private String name;
    private Timestamp releaseDate;
}
