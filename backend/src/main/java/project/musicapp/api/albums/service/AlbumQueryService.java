package project.musicapp.api.albums.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumDTO;
import project.musicapp.api.albums.mapper.AlbumObjectMapper;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.albums.repository.AlbumRepository;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AlbumQueryService {
    private final AlbumRepository albumRepository;
    private final UserRepository userRepository;
    private final SongService songService;

    public List<AlbumDTO> getAlbumsByUserId(int id) {
        return null;
    }

    public User getUserByAlbumId(int id) {
        Album album = getAlbumByAlbumId(id);
        Integer creatorId = album.getCreator().getId();
        return this.userRepository.findById(creatorId).orElse(null);
    }

    public Album getAlbumByAlbumId(int id) {
        return this.albumRepository.findById(id).orElse(null);
    }

    public List<AlbumDTO> findAllAlbumsByName(String value, int limit, int offset) {
        List<Object[]> albums = this.albumRepository.findAllAlbumsByName(value, limit, offset);
        return new AlbumObjectMapper(albums).toAlbumDTOs();
    }

    public List<SongUserDTO> getSongsByAlbumId(int id){
        List<Integer> songIndices = this.albumRepository.findAllSongsByAlbumId(id);
        List<SongUserDTO> songsUsers = new ArrayList<>(songIndices.size());

        for (Integer songId : songIndices)
            songsUsers.add(songService.findSongUserById(songId));

        return songsUsers;
    }
}
