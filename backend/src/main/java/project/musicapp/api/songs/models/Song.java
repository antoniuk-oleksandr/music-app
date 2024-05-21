package project.musicapp.api.songs.models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "songs")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "song_id")
    public Integer id;
    private Integer duration;

    @Column(name = "release_date")
    private Timestamp releaseDate;

    @Column(name="file_url")
    private String filePath;
}
