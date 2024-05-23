package project.musicapp.api.playlists.utils;

public class PlaylistQuerySQL {
    public static final String FIND_ALL_PLAYLISTS_BY_NAME =
            "SELECT p.playlist_id, p.is_public, p.creating_date, p.name, p.image_path, u.user_id, u.username " +
            "FROM playlists AS p " +
            "JOIN users AS u ON p.user_id = u.user_id " +
            "WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";
}
