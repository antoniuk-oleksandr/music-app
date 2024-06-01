package project.musicapp.api.email.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SendCodeDTO {
    private String to;
    private String subject;
    private String html;
}
