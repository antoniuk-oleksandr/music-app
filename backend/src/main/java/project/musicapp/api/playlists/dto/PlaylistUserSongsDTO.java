package project.musicapp.api.playlists.dto;

import lombok.*;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.songs.dto.SongUserDTO;

import java.sql.Timestamp;
import java.util.List;


@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlaylistUserSongsDTO {
    private String name;
    private String imagePath;
    private Timestamp creatingDate;
    private PlaylistCreatorDTO creator;
    private List<SongUserDTO> songs;
}
