package project.musicapp.api.search.mapper;

import lombok.*;
import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.users.dto.UserDTO;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SearchMapper {
    private List<UserDTO> users;
    private List<SongUsersDTO> songs;
    private List<PlaylistDTO> playlists;

    public SearchDTO toSearchDTO(){
        return SearchDTO.builder()
                .users(users)
                .songs(songs)
                .playlists(playlists).build();
    }
}
