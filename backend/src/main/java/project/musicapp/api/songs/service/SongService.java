package project.musicapp.api.songs.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.songs.dto.CreateSongDTO;
import project.musicapp.api.songs.dto.SongUserDTO;

import java.util.List;
import java.util.Optional;

@Service
public interface SongService {
    SongUserDTO findSongUserBySongId(int id);

    List<SongUserDTO> findAllSongUsersByUserId(int userId, int limit, int offset);

    List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset);

    ResponseEntity<?> createSongWithUserInfo(HttpHeaders headers,
                                          CreateSongDTO requestDTO,
                                          MultipartFile mp3,
                                          MultipartFile picture);

    Integer findFirstUserSongIdBySongId(int id);
}
