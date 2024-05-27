package project.musicapp.api.profiles.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

@Builder
@Getter @Setter
@AllArgsConstructor
public class ProfileDTO {
    private UserBannerDTO user;
    private List<SongUserDTO> songs;
    private List<AlbumUserSongsDTO> albums;
    private List<PlaylistUserSongsDTO> playlists;
}
