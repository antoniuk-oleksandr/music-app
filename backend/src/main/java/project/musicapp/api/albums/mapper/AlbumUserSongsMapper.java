package project.musicapp.api.albums.mapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import project.musicapp.api.albums.dto.AlbumCreatorDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlbumUserSongsMapper {
    private User user;
    private Album album;
    private List<SongUserDTO> songs;

    public AlbumUserSongsDTO toAlbumUserSongsDTO(){
        return AlbumUserSongsDTO.builder()
                .id(album.getAlbumId())
                .name(album.getName())
                .creator(getAlbumCreatorDTO())
                .creatingDate(album.getDate())
                .imagePath(album.getImagePath())
                .songs(songs).build();
    }

    private AlbumCreatorDTO getAlbumCreatorDTO(){
        return new AlbumCreatorDTO(user.getId(), user.getUsername());
    }
}

