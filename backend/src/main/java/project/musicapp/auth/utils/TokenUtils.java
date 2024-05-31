package project.musicapp.auth.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
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

    public String generateAccessToken(String username) {
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("type", "access");
        return createToken(claims, username, jwtLifetime);
    }

    public String generateRefreshToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("type", "refresh");
        return createToken(claims, username, refreshTokenLifetime);
    }

    public Date getDateFromToken(String token) {
        Claims claims = parseToken(token);
        return claims.getExpiration();
    }

    public Timestamp getExpirationFromToken(String token) {
        Date expiration = getDateFromToken(token);
        return new Timestamp(expiration.getTime());
    }

    public String getUsernameFromToken(String token) {
        return parseToken(token).getSubject();
    }

    public boolean isAccessToken(String token) {
        Claims claims = parseToken(token);
        return "access".equals(claims.get("type"));
    }

    public Boolean validateToken(String token) {
        Date expiration = getDateFromToken(token);
        return expiration.after(new Date());
    }

    private String createToken(Map<String, Object> claims, String username, Duration lifetime) {
        return Jwts.builder()
                .setClaims(claims).setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + lifetime.toMillis()))
                .signWith(SignatureAlgorithm.HS256, secret).compact();
    }

    private Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret).build()
                .parseClaimsJws(token).getBody();
    }
}
