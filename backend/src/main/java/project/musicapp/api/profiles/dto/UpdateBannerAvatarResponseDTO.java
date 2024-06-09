package project.musicapp.api.profiles.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class UpdateBannerAvatarResponseDTO {
    private String method;
    private String url;
    private Boolean success;
}
