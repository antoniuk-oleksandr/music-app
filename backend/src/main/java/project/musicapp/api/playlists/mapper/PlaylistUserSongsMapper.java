package project.musicapp.api.playlists.mapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import project.musicapp.api.albums.dto.PlaylistCreatorDTO;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.model.Playlist;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistUserSongsMapper {
    private User user;
    private Playlist playlist;
    private List<SongUserDTO> songs;

    public PlaylistUserSongsDTO toAlbumUserSongsDTO(){
        return PlaylistUserSongsDTO.builder()
                .name(playlist.getName())
                .creator(getAlbumCreatorDTO())
                .creatingDate(playlist.getCreatingDate())
                .imagePath(playlist.getImagePath())
                .songs(songs).build();
    }

    private PlaylistCreatorDTO getAlbumCreatorDTO(){
        return new PlaylistCreatorDTO(user.getId(), user.getUsername());
    }
}
