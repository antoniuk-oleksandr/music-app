package project.musicapp.api.tokens.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
@AllArgsConstructor
public class JwtTokenDTO {
    private String token;
    private Timestamp expiration;
}
