package project.musicapp.api.playlists.dto;

import lombok.*;
import project.musicapp.api.users.dto.UserDTO;

import java.sql.Timestamp;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class PlaylistDTO {
    private Integer id;
    private Boolean isPublic;
    private Timestamp creatingDate;
    private String name;
    private String imagePath;
    private PlaylistUserDTO user;
}
