package project.musicapp.api.subscribe.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.subscribe.service.SubscribeService;

@RestController
@RequestMapping("/subscribe")
@RequiredArgsConstructor
public class SubscribeController {
    private final SubscribeService subscribeService;

    @PostMapping("/{userId}")
    private ResponseEntity<?> subscribeToUser(@RequestHeader HttpHeaders headers,
                                              @PathVariable int userId) {
        return this.subscribeService.subscribeToUser(headers, userId);
    }

    @DeleteMapping("/{userId}")
    private ResponseEntity<?> unsubscribeToUser(@RequestHeader HttpHeaders headers,
                                                @PathVariable int userId) {
        return this.subscribeService.unsubscribeToUser(headers, userId);
    }
}
