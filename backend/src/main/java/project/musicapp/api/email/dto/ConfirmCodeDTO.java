package project.musicapp.api.email.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ConfirmCodeDTO {
    private String email;
    private int code;
}
