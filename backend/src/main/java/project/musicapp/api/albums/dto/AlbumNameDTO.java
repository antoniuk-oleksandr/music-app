package project.musicapp.api.albums.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class AlbumNameDTO {
    private Integer id;
    private String name;
}
