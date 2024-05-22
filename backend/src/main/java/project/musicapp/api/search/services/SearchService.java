package project.musicapp.api.search.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.search.mappers.SearchMapper;
import project.musicapp.api.songs.repositories.SongUserRepository;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repositories.UserRepository;

import java.util.List;

@Service
public class SearchService {
    private final UserRepository userRepository;
    private final SongUserRepository songUserRepository;

    @Autowired
    public SearchService(SongUserRepository songUserRepository,
                         UserRepository userRepository
    ) {
        this.userRepository = userRepository;
        this.songUserRepository = songUserRepository;
    }

    private List<Object[]> getSongs(String value, int limit, int offset){
        return this.songUserRepository.findAllSongUsersBySongName(value, limit, offset);
    }

    private List<User> getUsers(String value, int limit, int offset){
        return this.userRepository.findAllUsersByUsername(value, limit, offset);
    }

    public ResponseEntity<SearchDTO> search(String value, int limit, int offset) {
        List<Object[]> songs = getSongs(value, limit, offset);
        List<User> users = getUsers(value, limit, offset);

        SearchMapper searchMapper = new SearchMapper(users, songs);
        return ResponseEntity.ok().body(searchMapper.toSearchDTO());
    }
}