package project.musicapp.api.albums.model;

import jakarta.persistence.*;
import project.musicapp.api.users.model.User;

import java.sql.Timestamp;

@Entity
@Table(name = "albums")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "album_id")
    private Integer albumId;

    private String name;

    private Timestamp date;

    @Column(name = "image_path")
    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "creator_id", referencedColumnName = "user_id")
    private User creator;
}
