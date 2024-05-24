package project.musicapp.api.albums.mapper;

import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

public class AlbumMapper {
    private final List<Object[]> albums;

    public AlbumMapper(List<Object[]> albums) {
        this.albums = albums;
    }

    public List<AlbumDTO> toAlbumDTOs() {
        return this.albums.stream()
                .map((this::toAlbumDTO))
                .collect(Collectors.toList());
    }

    private AlbumDTO toAlbumDTO(Object[] album) {
        return AlbumDTO.builder()
                .id((Integer) album[0])
                .name((String) album[1])
                .creatingDate((Timestamp) album[2])
                .imagePath((String) album[3])
                .user(new AlbumCreatorDTO(
                        (Integer) album[4],
                        (String) album[5]
                )).build();
    }
}
