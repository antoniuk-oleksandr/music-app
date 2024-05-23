package project.musicapp.api.songs.mapper;

import project.musicapp.api.songs.dto.SongDTO;
import project.musicapp.api.songs.dto.SongUsersDTO;
import project.musicapp.api.users.dto.UserDTO;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class SongUserMapper {
    private final List<Object[]> userSongs;

    public SongUserMapper(List<Object[]> userSongs) {
        this.userSongs = userSongs;
    }

    public List<SongUsersDTO> toListSongUserDTO() {
        HashMap<Integer, SongUsersDTO> songUsers = new HashMap<>();

        for (Object[] userSong : userSongs) {
            SongDTO songDTO = getSongDTO(userSong);
            UserDTO userDTO = getUserDTO(userSong);
            SongUsersDTO songUsersDTO = songUsers.get(songDTO.getId());

            if (songUsersDTO == null) {
                songUsersDTO = new SongUsersDTO();
                songUsersDTO.setSong(songDTO);
                songUsersDTO.setUsers(new ArrayList<>());
                songUsers.put(songDTO.getId(), songUsersDTO);
            }

            songUsersDTO.getUsers().add(userDTO);
        }
        return new ArrayList<>(songUsers.values());
    }

    private SongDTO getSongDTO(Object[] result) {
        return SongDTO.builder()
                .id((Integer) result[0])
                .name((String) result[1])
                .duration((Integer) result[2])
                .releaseDate((Timestamp) result[3])
                .songURL((String) result[4])
                .build();
    }

    private UserDTO getUserDTO(Object[] result) {
        return UserDTO.builder()
                .id((Integer) result[5])
                .username((String) result[6])
                .avatar((String) result[7])
                .banner((String) result[8])
                .build();
    }
}
