package project.musicapp.api.albums.dto;

import lombok.*;
import project.musicapp.api.songs.dto.SongUserDTO;

import java.sql.Timestamp;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class AlbumUserSongsDTO {
    private Integer id;
    private String name;
    private String imagePath;
    private Timestamp creatingDate;
    private AlbumCreatorDTO creator;
    private List<SongUserDTO> songs;
}
