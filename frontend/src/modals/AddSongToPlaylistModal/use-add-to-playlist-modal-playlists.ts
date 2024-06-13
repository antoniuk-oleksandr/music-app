import {Playlist} from "@/types/Playlist";
import {useEffect, useState} from "react";
import {formatUrl} from "@/utils/utils";

export const useAddToPlaylistModalPlaylists = (playlistsData: Playlist[] | null) => {
    let data = [];
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        if (!playlistsData) return;

        const newList = playlistsData.map((playlist) => ({
            ...playlist,
            imagePath: formatUrl(playlist.imagePath),
        }))

        setPlaylists(newList);

    }, []);

    return {playlists};
}