package project.musicapp.api.songs.dto;

import lombok.*;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SongUsersDTO {
    private SongDTO song;
    private List<UserDTO> users;
}
