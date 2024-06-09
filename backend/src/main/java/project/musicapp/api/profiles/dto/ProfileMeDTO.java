package project.musicapp.api.profiles.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class ProfileMeDTO {
    private Integer id;
    private String name;
    private String avatar;
}
