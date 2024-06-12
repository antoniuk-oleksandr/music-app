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
            "SELECT DISTINCT s.song_id, s.release_date " +
                    "FROM songs_playlists AS sp " +
                    "INNER JOIN user_songs AS us ON sp.user_song_id = us.user_songs_id " +
                    "INNER JOIN songs AS s ON us.song_id = s.song_id " +
                    "WHERE sp.playlist_id = ?1 " +
                    "ORDER BY s.release_date DESC";

    public static final String FIND_ALL_PLAYLISTS_ID_BY_USER_ID =
            "SELECT DISTINCT playlist_id, creating_date " +
                    "FROM playlists " +
                    "WHERE creator_id = ?1 " +
                    "ORDER BY creating_date DESC " +
                    "LIMIT ?2 OFFSET ?3";

    public static final String FIND_PLAYLIST_BY_USER_ID_AND_PLAYLIST_NAME =
            "SELECT * FROM playlists " +
                    "WHERE creator_id = :creatorId AND name = :name";

    public static final String FIND_SONG_BY_PLAYLIST_ID_AND_USER_SONG_ID =
            "SELECT * FROM songs_playlists " +
                    "WHERE playlist_id = :playlistId " +
                    "AND user_song_id = :userSongId";

    public static final String SAVE_SONG_TO_PLAYLIST =
            "INSERT INTO songs_playlists(playlist_id, user_song_id) " +
                    "VALUES (:playlistId, :userSongId)";

    public static final String DELETE_SONG_FROM_PLAYLIST =
            "DELETE FROM songs_playlists " +
                    "WHERE playlist_id = :playlistId " +
                    "AND user_song_id = :userSongId";
}
