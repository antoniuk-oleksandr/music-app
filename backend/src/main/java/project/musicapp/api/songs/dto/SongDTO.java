package project.musicapp.api.songs.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
public class SongDTO {
    private String name;
    private Integer duration;
    private Timestamp releaseDate;
}

