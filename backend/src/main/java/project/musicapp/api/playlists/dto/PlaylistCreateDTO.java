package project.musicapp.api.playlists.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class PlaylistCreateDTO {
    private String name;
    private Boolean isPublic;
}
