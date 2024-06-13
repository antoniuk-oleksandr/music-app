package project.musicapp.api.songs.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.albums.dto.AlbumNameDTO;
import project.musicapp.api.albums.service.AlbumCreatorService;
import project.musicapp.api.files.service.FileService;
import project.musicapp.api.songs.dto.CreateSongDTO;
import project.musicapp.api.songs.dto.CreateSongIdResponseDTO;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.mapper.CreateSongMapper;
import project.musicapp.api.songs.mapper.SongUserMapper;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.songs.model.SongUser;
import project.musicapp.api.songs.repository.SongRepository;
import project.musicapp.api.songs.repository.SongUserRepository;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SongServiceImpl implements SongService {
    private final UserService userService;
    private final AccessTokenService accessTokenService;
    private final AlbumCreatorService albumCreatorService;
    private final SongRepository songRepository;
    private final SongUserRepository songUserRepository;
    private final FileService fileService;

    @Override
    public SongUserDTO findSongUserBySongId(int id) {
        Song song = this.songRepository.findById(id).orElse(new Song());
        AlbumNameDTO album = this.albumCreatorService.getAlbumCreatorBySongId(song.getId());
        List<UserDTO> users = this.userService.findAllUsersBySongId(song.getId());

        return SongUserMapper.toSongUserDTO(song, album, users);
    }

    @Override
    public List<SongUserDTO> findAllSongUsersByUserId(int userId, int limit, int offset) {
        List<Integer> songIndices = this.songUserRepository.findAllUserSongsIndicesByUserId(userId, limit, offset);
        return getSongUsersByIndices(songIndices);
    }

    @Override
    public List<SongUserDTO> findAllSongUsersBySongName(String value, int limit, int offset) {
        List<Integer> songIndices = this.songUserRepository.findAllSongsUsersIndicesBySongName(value, limit, offset);
        return getSongUsersByIndices(songIndices);
    }

    @Override
    public ResponseEntity<?> createSongWithUserInfo(
        HttpHeaders headers, CreateSongDTO requestDTO,
        MultipartFile mp3, MultipartFile picture
    ) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        User user = this.userService.getUserFromAccessToken(accessToken).orElseThrow(
            () -> new IllegalArgumentException("Invalid access token")
        );

        String uuidFileName = String.valueOf(UUID.randomUUID());
        String songNameWithExtension = uuidFileName + "." + mp3.getOriginalFilename().split("\\.")[1];
        String pictureNameWithExtension = uuidFileName + "." + picture.getOriginalFilename().split("\\.")[1];

        this.fileService.upload(uuidFileName, mp3)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(500).body(e.getMessage()))).block();

        this.fileService.upload(uuidFileName, picture)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(500).body(e.getMessage()))).block();

        Song song = mapToSong(requestDTO, songNameWithExtension, pictureNameWithExtension);
        this.songRepository.save(song);

        this.userService.setTrueIsArtistForUser(user.getId());

        SongUser songUser = SongUser.builder().user(user).song(song).build();
        this.songUserRepository.save(songUser);

        return ResponseEntity.ok().body(new CreateSongIdResponseDTO(song.getId()));
    }

    @Override
    public Integer findFirstUserSongIdBySongId(int id) {
        return this.songUserRepository.findSongsUsersIndicesBySongId(id)
            .orElseThrow(() -> new IllegalArgumentException("Current song_user_id doesn't exist"));
    }

    private List<SongUserDTO> getSongUsersByIndices(List<Integer> indices) {
        return indices.stream().map(this::findSongUserBySongId).collect(Collectors.toList());
    }

    private Song mapToSong(CreateSongDTO createSongDTO, String mp3FileName, String pictureFileName)  {
        return CreateSongMapper.builder()
                .songDTO(createSongDTO)
                .songFileName(mp3FileName)
                .imageFileName(pictureFileName)
                .build().toSongWithDuration();
    }
}
