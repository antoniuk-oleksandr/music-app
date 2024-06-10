package project.musicapp.api.songs.mapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import project.musicapp.api.songs.dto.CreateSongDTO;
import project.musicapp.api.songs.model.Song;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateSongMapper {
    private String songFileName;
    private String imageFileName;
    private CreateSongDTO songDTO;

    public Song toSongWithDuration() {
        return Song.builder()
                .name(songDTO.getName())
                .duration(songDTO.getDuration())
                .releaseDate(songDTO.getReleaseDate())
                .songPath(songFileName)
                .imagePath(imageFileName)
                .build();
    }
}
