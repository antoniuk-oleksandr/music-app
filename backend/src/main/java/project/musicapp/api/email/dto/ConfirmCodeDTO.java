package project.musicapp.api.email.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class ConfirmCodeDTO {
    private String email;
    private int code;
}
