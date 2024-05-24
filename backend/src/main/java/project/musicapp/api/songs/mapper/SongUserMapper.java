package project.musicapp.api.songs.mapper;

import project.musicapp.api.songs.dto.SongUserDTO;
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

    public List<SongUserDTO> toListSongUserDTO() {
        HashMap<Integer, SongUserDTO> songUsersMap = new HashMap<>();

        for (Object[] result : userSongs) {
            int songId = (Integer) result[0];
            SongUserDTO songUsersDTO;

            if (songUsersMap.containsKey(songId)) {
                songUsersDTO = songUsersMap.get(songId);
            } else {
                songUsersDTO = toSongUsersDTO(result);
                songUsersMap.put(songId, songUsersDTO);
            }

            UserDTO userDTO = toUserSearchDTO(result);
            songUsersDTO.getUsers().add(userDTO);
        }

        return new ArrayList<>(songUsersMap.values());
    }

    private SongUserDTO toSongUsersDTO(Object[] result) {
        return SongUserDTO.builder()
                .id((Integer) result[0])
                .name((String) result[1])
                .duration((Integer) result[2])
                .releaseDate((Timestamp) result[3])
                .songPath((String) result[4])
                .imagePath((String) result[5])
                .users(new ArrayList<>())
                .build();
    }

    private UserDTO toUserSearchDTO(Object[] result) {
        return UserDTO.builder()
                .id((Integer) result[6])
                .username((String) result[7])
                .avatarPath((String) result[8])
                .build();
    }
}
