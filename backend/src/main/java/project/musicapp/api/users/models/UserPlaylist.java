package project.musicapp.api.users.models;

import jakarta.persistence.*;

@Entity
@Table(name="user_playlists")
public class UserPlaylist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
}
