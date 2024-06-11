package project.musicapp.api.playlists.model;

import jakarta.persistence.*;
import lombok.*;
import project.musicapp.api.songs.model.SongUser;

@Entity
@Table(name = "songs_playlists")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class PlaylistSongs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "song_playlist_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "playlist_id", referencedColumnName = "playlist_id")
    private Playlist playlist;

    @ManyToOne
    @JoinColumn(name = "user_song_id", referencedColumnName = "user_songs_id")
    private SongUser userSongs;
}
