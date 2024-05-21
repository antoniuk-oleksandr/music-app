package project.musicapp.api.users.models;

import jakarta.persistence.*;

@Entity
@Table(name="user_songs")
public class UserSong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
}
