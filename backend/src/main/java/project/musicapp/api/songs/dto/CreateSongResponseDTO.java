package project.musicapp.api.songs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class CreateSongResponseDTO {
    private String method;
    private String url;
    private Boolean success;
}
