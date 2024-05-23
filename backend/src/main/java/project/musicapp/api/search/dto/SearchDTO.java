package project.musicapp.api.search.dto;

import lombok.*;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SearchDTO {
    private List<UserDTO> profiles;
    private List<UserDTO> artists;
    private List<SongUsersDTO> songs;
    private List<PlaylistDTO> playlists;
    private List<AlbumDTO> albums;
}
