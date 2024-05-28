package project.musicapp.api.albums.mapper;

import project.musicapp.api.albums.dto.AlbumCreatorDTO;

import java.util.List;

public class AlbumCreatorMapper {
    private final List<Object[]> albumCreatorObject;

    public AlbumCreatorMapper(List<Object[]> albumCreatorObject) {
        this.albumCreatorObject = albumCreatorObject;
    }

    public AlbumCreatorDTO toAlbumCreatorDTO() {
        if(this.albumCreatorObject.isEmpty()){
            return AlbumCreatorDTO.builder().id(null).username(null).build();
        }
        return AlbumCreatorDTO.builder()
                .id((Integer) albumCreatorObject.get(0)[0])
                .username((String) albumCreatorObject.get(0)[1])
                .build();
    }
}
