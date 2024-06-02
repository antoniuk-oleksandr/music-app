package project.musicapp.utils.email.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter @Setter
@AllArgsConstructor
public class CodeDTO {
    private String code;
    private Timestamp expires;
}
