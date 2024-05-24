package project.musicapp.api.search.mapper;

import lombok.*;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SearchMapper {
    private List<UserDTO> profiles;
    private List<UserDTO> artists;
    private List<SongUserDTO> songs;
    private List<PlaylistDTO> playlists;
    private List<AlbumDTO> albums;

    public SearchDTO toSearchDTO(){
        return SearchDTO.builder()
                .profiles(profiles)
                .artists(artists)
                .songs(songs)
                .playlists(playlists)
                .albums(albums)
                .build();
    }
}
