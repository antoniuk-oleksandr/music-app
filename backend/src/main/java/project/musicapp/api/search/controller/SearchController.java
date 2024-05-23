package project.musicapp.api.search.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.search.service.SearchService;

@RestController
@RequestMapping("/search")
public class SearchController {
    private final SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping("/{searchType}")
    public ResponseEntity<SearchDTO> search(@PathVariable String searchType,
                                            @RequestParam String value,
                                            @RequestParam int limit,
                                            @RequestParam int offset) {
        return this.searchService.search(searchType, value, limit, offset);
    }
}
