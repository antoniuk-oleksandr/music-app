package project.musicapp.api.music;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "music_tracks")
public class MusicTrackModal {
    @Id
    Integer trackId;

}

