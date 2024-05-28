package project.musicapp.api.search.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.search.mapper.SearchMapper;
import project.musicapp.api.search.type.SearchType;

@Service
@RequiredArgsConstructor
public class SearchDataService {
    private final SearchQueryService searchQueryService;

    public ResponseEntity<SearchDTO> search(String searchTypeString, String value, int limit, int offset) {
        SearchType searchType = SearchType.valueOf(searchTypeString.toUpperCase());

        SearchMapper searchMapper = switch (searchType) {
            case PROFILES -> SearchMapper.builder()
                    .profiles(searchQueryService.getProfiles(value, limit, offset))
                    .build();
            case ARTISTS -> SearchMapper.builder()
                    .artists(searchQueryService.getArtists(value, limit, offset))
                    .build();
            case SONGS -> SearchMapper.builder()
                    .songs(searchQueryService.getSongs(value, limit, offset))
                    .build();
            case ALBUMS -> SearchMapper.builder()
                    .albums(searchQueryService.getAlbums(value, limit, offset))
                    .build();
            case PLAYLISTS -> SearchMapper.builder()
                    .playlists(searchQueryService.getPlaylists(value, limit, offset))
                    .build();
            default -> SearchMapper.builder()
                    .profiles(searchQueryService.getProfiles(value, limit, offset))
                    .artists(searchQueryService.getArtists(value, limit, offset))
                    .songs(searchQueryService.getSongs(value, limit, offset))
                    .albums(searchQueryService.getAlbums(value, limit, offset))
                    .playlists(searchQueryService.getPlaylists(value, limit, offset))
                    .build();
        };

        return ResponseEntity.ok().body(searchMapper.toSearchDTO());
    }
}
