package project.musicapp.api.albums.dto;

import lombok.*;

import java.sql.Timestamp;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class AlbumDTO {
    private Integer id;
    private String name;
    private String imagePath;
    private Timestamp creatingDate;
    private AlbumCreatorDTO user;
}
