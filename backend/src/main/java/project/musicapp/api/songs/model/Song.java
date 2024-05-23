package project.musicapp.api.songs.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "songs")
@Getter @Setter
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "song_id")
    public Integer id;
    private Integer duration;

    @Column(name = "release_date")
    private Timestamp releaseDate;

    @Column(name="song_path")
    private String songPath;

    @Column(name="image_path")
    private String imagePath;
}
