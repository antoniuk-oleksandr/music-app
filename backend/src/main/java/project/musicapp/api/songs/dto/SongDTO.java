package project.musicapp.api.songs.dto;

import lombok.*;

import java.sql.Timestamp;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SongDTO {
    private Integer id;
    private String name;
    private Integer duration;
    private Timestamp releaseDate;
    private String songURL;
}