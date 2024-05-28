package project.musicapp.api.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.search.dto.SearchDTO;

@Service
public class SearchService {
    private final SearchDataService searchDataService;

    @Autowired
    public SearchService(SearchDataService searchDataService) {
        this.searchDataService = searchDataService;
    }

    public ResponseEntity<SearchDTO> search(String searchTypeString, String value, int limit, int offset) {
        return this.searchDataService.search(searchTypeString, value, limit, offset);
    }
}