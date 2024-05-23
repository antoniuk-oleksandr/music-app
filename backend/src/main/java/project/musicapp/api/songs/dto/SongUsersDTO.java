package project.musicapp.api.songs.dto;

import lombok.*;
import project.musicapp.api.users.dto.UserDTO;

import java.sql.Timestamp;
import java.util.List;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SongUsersDTO {
    private Integer id;
    private String name;
    private Integer duration;
    private Timestamp releaseDate;
    private String songPath;
    private String imagePath;
    private List<UserDTO> users;
}
