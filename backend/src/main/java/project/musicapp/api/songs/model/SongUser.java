package project.musicapp.api.songs.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import project.musicapp.api.users.model.User;

@Entity
@Table(name = "user_songs")
@Getter @Setter
public class SongUser {
    @Id
    @Column(name="user_songs_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "song_id", referencedColumnName = "song_id")
    private Song song;
}
