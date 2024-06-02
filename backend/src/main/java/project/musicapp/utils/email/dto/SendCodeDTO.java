package project.musicapp.utils.email.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class SendCodeDTO {
    private String to;
    private String subject;
    private String html;
}
