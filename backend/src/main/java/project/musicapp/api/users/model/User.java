package project.musicapp.api.users.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="users")
@Builder @Getter @Setter
@AllArgsConstructor @NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer id;

    private String username;
    private String password;
    private String email;

    @Column(name="avatar_path")
    private String avatar;

    @Column(name="banner_path")
    private String banner;

    @Column(name="is_artist")
    private Boolean isArtist;
}
