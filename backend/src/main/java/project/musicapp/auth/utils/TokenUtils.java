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
public class TokenUtils {
    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.lifetime}")
    private Duration jwtLifetime;

    @Value("${jwt.refreshToken.lifetime}")
    private Duration refreshTokenLifetime;

    public String generateToken(UserDetails userDetails) {
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("tokenType", "access");
        return createToken(claims, userDetails.getUsername(), jwtLifetime);
    }

    public String generateRefreshToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("tokenType", "refresh");
        return createToken(claims, userDetails.getUsername(), refreshTokenLifetime);
    }

    private String createToken(Map<String, Object> claims, String username, Duration lifetime) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + lifetime.toMillis()))
                .signWith(SignatureAlgorithm.HS256, secret).compact();
    }

    public Date getDateFromToken(String token) {
        Claims claims = parseToken(token);
        return claims.getExpiration();
    }

    public String getUsernameFromToken(String token) {
        return parseToken(token).getSubject();
    }

    public boolean isRefreshToken(String token) {
        Claims claims = parseToken(token);
        return "refresh".equals(claims.get("tokenType"));
    }

    public boolean isAccessToken(String token) {
        Claims claims = parseToken(token);
        return "access".equals(claims.get("tokenType"));
    }

    public Boolean validateToken(String token) {
        Date expiration = getDateFromToken(token);
        return expiration.after(new Date());
    }

    private Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret).build()
                .parseClaimsJws(token).getBody();
    }
}
