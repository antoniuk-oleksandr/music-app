package project.musicapp.api.songs.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;


@Entity
@Table(name = "songs")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "song_id")
    public Integer id;
    private Integer duration;
    private String name;

    @Column(name = "release_date")
    private Timestamp releaseDate;

    @Column(name="song_path")
    private String songPath;

    @Column(name="image_path")
    private String imagePath;
}
