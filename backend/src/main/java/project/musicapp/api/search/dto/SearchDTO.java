package project.musicapp.api.search.dto;

import lombok.*;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SearchDTO {
    private List<UserDTO> users;
    private List<SongUsersDTO> songs;
}
