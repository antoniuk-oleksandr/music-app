package project.musicapp.api.search.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.search.dto.SearchDTO;
import project.musicapp.api.search.services.SearchService;

@RestController
@RequestMapping("/search")
public class SearchController {
    private final SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public ResponseEntity<SearchDTO> search(@RequestParam String value, @RequestParam int limit, @RequestParam int offset) {
        return this.searchService.search(value, limit, offset);
    }
}
