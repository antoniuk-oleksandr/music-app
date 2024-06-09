package project.musicapp.api.playlists.model;

import jakarta.persistence.*;
import lombok.*;
import project.musicapp.api.users.model.User;

import java.sql.Timestamp;

@Entity
@Table(name="playlists")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="playlist_id")
    private Integer id;
    private String name;

    @Column(name = "is_public")
    private boolean isPublic;

    @Column(name = "creating_date")
    private Timestamp creatingDate;

    @Column(name = "image_path")
    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "creator_id", referencedColumnName = "user_id")
    private User user;
}
