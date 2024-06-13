package project.musicapp.api.home.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.home.service.HomeService;

@RestController
@RequiredArgsConstructor
public class HomeController {
    private final HomeService homeService;

    @GetMapping("/{homeId}")
    public ResponseEntity<?> getHome(@PathVariable long homeId) {
        return null;
    }
}
