package project.musicapp.api.users.dto;

import project.musicapp.api.songs.dto.SongDTO;

public class UserSongsDTO {
    private UserDTO user;
    private SongDTO[] songs;
}
