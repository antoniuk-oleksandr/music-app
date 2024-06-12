package project.musicapp.api.playlists.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import project.musicapp.api.songs.model.Song;
import project.musicapp.api.users.model.User;

@Entity
@Table(name = "songs_likes")
@Getter @Setter
public class PlaylistLikes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "songs_likes")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "song_id", referencedColumnName = "song_id")
    private Song song;
}

