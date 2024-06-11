package project.musicapp.api.playlists.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class PlaylistSongDTO {
    private Integer songId;
    private List<Integer> userIds;
}
