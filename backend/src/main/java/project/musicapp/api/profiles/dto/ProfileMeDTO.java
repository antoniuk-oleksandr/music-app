package project.musicapp.api.profiles.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
public class ProfileMeDTO {
    private Integer id;
    private String username;
    private String avatarPath;
    private List<PlaylistUserSongsDTO> playlists;
}
