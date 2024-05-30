package project.musicapp.auth.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.*;

@Component
public class JwtTokenUtils {
    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.lifetime}")
    private Duration jwtLifetime;

    public String getUsernameFromToken(String token) {
        return parseToken(token).getSubject();
    }

    public String generateToken(UserDetails userDetails) {
        HashMap<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    private Date expiredDate() {
        return new Date(new Date().getTime() + jwtLifetime.toMillis());
    }

    private String createToken(Map<String, Object> claims, String username) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(expiredDate())
                .signWith(SignatureAlgorithm.HS256, secret).compact();
    }

    private Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret).build()
                .parseClaimsJws(token).getBody();
    }
}
