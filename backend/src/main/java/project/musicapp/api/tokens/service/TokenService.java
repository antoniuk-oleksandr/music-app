package project.musicapp.api.tokens.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import project.musicapp.api.tokens.type.TokenType;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.Date;
import java.util.Map;

@Component
public abstract class TokenService {
    @Value("${jwt.secret}")
    private String secret;

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

    public Boolean validateToken(String token) {
        Date expiration = getDateFromToken(token);
        return expiration.after(new Date());
    }

    public String createToken(Map<String, Object> claims, String username, Duration lifetime) {
        return Jwts.builder()
                .setClaims(claims).setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + lifetime.toMillis()))
                .signWith(SignatureAlgorithm.HS256, secret).compact();
    }

    public Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret).build()
                .parseClaimsJws(token).getBody();
    }
}
