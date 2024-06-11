package project.musicapp.api.songs.model;

import jakarta.persistence.*;
import lombok.*;
import project.musicapp.api.users.model.User;

import java.util.List;

@Entity
@Table(name = "user_songs")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class SongUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_songs_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "song_id", referencedColumnName = "song_id")
    private Song song;
}
