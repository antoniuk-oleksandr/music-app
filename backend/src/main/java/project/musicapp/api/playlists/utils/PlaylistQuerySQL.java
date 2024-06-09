package project.musicapp.api.playlists.utils;

public class PlaylistQuerySQL {
    public static final String FIND_ALL_PLAYLISTS_BY_NAME =
            "SELECT DISTINCT p.playlist_id, p.is_public, p.creating_date, p.name, p.image_path, " +
                    "u.user_id, u.username " +
            "FROM playlists AS p  " +
                "JOIN users AS u ON p.creator_id = u.user_id  " +
                "WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :value, '%'))  " +
                "AND p.is_public = true  " +
                "ORDER BY p.creating_date DESC " +
                "LIMIT :limit OFFSET :offset";

    public static final String FIND_ALL_SONGS_BY_PLAYLIST_ID =
            "SELECT DISTINCT song_id FROM ( " +
                "SELECT s.song_id " +
                "FROM songs_playlists AS sp " +
                    "INNER JOIN user_songs AS us ON sp.user_song_id = us.user_songs_id " +
                    "INNER JOIN songs AS s ON us.song_id = s.song_id " +
                    "WHERE sp.playlist_id = :id " +
                    "ORDER BY s.release_date DESC " +
            ") subquery";

    public static final String FIND_ALL_PLAYLISTS_ID_BY_USER_ID =
            "SELECT DISTINCT playlist_id FROM ( " +
                "SELECT playlists.playlist_id, playlists.creating_date " +
                "FROM playlists " +
                    "WHERE playlists.creator_id = :userId " +
                    "ORDER BY playlists.creating_date " +
            ") subquery LIMIT :limit OFFSET :offset";

    public static final String FIND_PLAYLIST_BY_USER_ID_AND_PLAYLIST_NAME =
            "SELECT * FROM playlists " +
            "WHERE creator_id = :creatorId AND name = :name";
}
