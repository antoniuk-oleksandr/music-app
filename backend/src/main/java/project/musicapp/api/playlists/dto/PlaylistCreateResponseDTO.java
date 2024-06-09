package project.musicapp.api.playlists.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class PlaylistCreateResponseDTO {
    private String method;
    private String message;
    private Boolean success;
}
