package project.musicapp.api.playlists.mapper;

import project.musicapp.api.playlists.dto.PlaylistDTO;
import project.musicapp.api.playlists.dto.PlaylistCreatorDTO;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

public class PlaylistMapper {
    private final List<Object[]> playlists;

    public PlaylistMapper(List<Object[]> playlists) {
        this.playlists = playlists;
    }

    public List<PlaylistDTO> toPlaylistDTOs() {
        return this.playlists.stream().map(this::toPlaylistDTO).collect(Collectors.toList());
    }

    private PlaylistCreatorDTO getPlaylistUserDTO(Integer id, String username) {
        return new PlaylistCreatorDTO(id, username);
    }

    private PlaylistDTO toPlaylistDTO(Object[] playlist){
        return PlaylistDTO.builder()
                .id((Integer) playlist[0])
                .isPublic((Boolean) playlist[1])
                .creatingDate((Timestamp) playlist[2])
                .name((String) playlist[3])
                .imagePath((String) playlist[4])
                .creator(getPlaylistUserDTO(
                        (Integer) playlist[5],
                        (String) playlist[6])
                ).build();
    }
}
