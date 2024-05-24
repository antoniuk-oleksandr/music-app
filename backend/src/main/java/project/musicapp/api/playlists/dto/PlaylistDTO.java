package project.musicapp.api.playlists.dto;

import lombok.*;

import java.sql.Timestamp;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlaylistDTO {
    private Integer id;
    private Boolean isPublic;
    private Timestamp creatingDate;
    private String name;
    private String imagePath;
    private PlaylistCreatorDTO user;
}
