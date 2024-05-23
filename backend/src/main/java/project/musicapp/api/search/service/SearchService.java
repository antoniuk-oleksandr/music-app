package project.musicapp.api.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.search.mapper.SearchMapper;
import project.musicapp.api.search.type.SearchType;

@Service
public class SearchService {
    private final SearchQueryService sqc;

    @Autowired
    public SearchService(SearchQueryService searchQueryService) {
        this.sqc = searchQueryService;
    }

    public ResponseEntity<SearchDTO> search(String searchTypeString, String value, int limit, int offset) {
        SearchType searchType = SearchType.valueOf(searchTypeString.toUpperCase());
        SearchMapper searchMapper = switch (searchType) {
            case PROFILES -> SearchMapper.builder()
                    .profiles(sqc.getProfiles(value, limit, offset))
                    .build();
            case ARTISTS -> SearchMapper.builder()
                    .artists(sqc.getArtists(value, limit, offset))
                    .build();
            case SONGS -> SearchMapper.builder()
                    .songs(sqc.getSongs(value, limit, offset))
                    .build();
            case ALBUMS -> SearchMapper.builder()
                    .albums(sqc.getAlbums(value, limit, offset))
                    .build();
            default -> SearchMapper.builder()
                    .profiles(sqc.getProfiles(value, limit, offset))
                    .artists(sqc.getArtists(value, limit, offset))
                    .songs(sqc.getSongs(value, limit, offset))
                    .albums(sqc.getAlbums(value, limit, offset))
                    .playlists(sqc.getPlaylists(value, limit, offset))
                    .build();
        };
        return ResponseEntity.ok().body(searchMapper.toSearchDTO());
    }
}