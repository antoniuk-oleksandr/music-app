package project.musicapp.auth.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.impl.UserDetailsServiceImpl;

@Component
@RequiredArgsConstructor
public class AuthUtils {
    private final TokenUtils jwtTokenUtils;
    private final UserDetailsServiceImpl userDetailsService;
    private final AuthenticationManager authenticationManager;

    public void authenticateJwtRequest(LoginRequestDTO authRequest) {
        try {
            this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (AuthenticationException e) {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    public UserDetails getUserDetails(String username) {
        return this.userDetailsService.loadUserByUsername(username);
    }

    public String generateAccessToken(UserDetails userDetails) {
        return this.jwtTokenUtils.generateToken(userDetails);
    }
}
