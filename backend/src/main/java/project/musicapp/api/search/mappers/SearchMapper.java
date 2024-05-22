package project.musicapp.api.search.mappers;

import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.songs.mapper.SongUserMapper;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.mapper.UserMapper;
import project.musicapp.api.users.model.User;

import java.util.List;

public class SearchMapper {
    private final List<User> users;
    private final List<Object[]> songs;

    public SearchMapper(List<User> users, List<Object[]> songs) {
        this.users = users;
        this.songs = songs;
    }

    public SearchDTO toSearchDTO(){
        return SearchDTO.builder().users(getUsersDTO()).songs(getSongUsersDTO()).build();
    }

    private List<UserDTO> getUsersDTO(){
        return new UserMapper(users).toUserDTO();
    }

    private List<SongUsersDTO> getSongUsersDTO(){
        return new SongUserMapper(songs).toListSongUserDTO();
    }
}
