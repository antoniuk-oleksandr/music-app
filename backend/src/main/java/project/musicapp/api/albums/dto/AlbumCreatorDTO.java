package project.musicapp.api.albums.dto;

import lombok.*;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlbumCreatorDTO {
    private Integer id;
    private String username;
}
