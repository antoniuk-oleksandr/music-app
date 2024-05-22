package project.musicapp.api.users.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer id;

    private String  username;
    private String  password;
    private String  email;

    @Column(name="avatar_url")
    private String avatar;

    @Column(name="banner_url")
    private String banner;
}
