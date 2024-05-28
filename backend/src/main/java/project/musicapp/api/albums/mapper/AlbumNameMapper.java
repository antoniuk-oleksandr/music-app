package project.musicapp.api.albums.mapper;

import project.musicapp.api.albums.dto.AlbumNameDTO;

import java.util.List;

public class AlbumNameMapper {
    private final List<Object[]> albumCreatorObject;

    public AlbumNameMapper(List<Object[]> albumNameObject) {
        this.albumCreatorObject = albumNameObject;
    }

    public AlbumNameDTO toAlbumCreatorDTO() {
        if(this.albumCreatorObject.isEmpty()){
            return AlbumNameDTO.builder().id(null).name(null).build();
        }
        return AlbumNameDTO.builder()
                .id((Integer) albumCreatorObject.get(0)[0])
                .name((String) albumCreatorObject.get(0)[1])
                .build();
    }
}
