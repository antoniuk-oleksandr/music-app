import {useEffect, useState} from "react";
import {Playlist} from "@/types/Playlist";
import {effect} from "@preact/signals-react";
import {profilePlaylistsSignal} from "@/pages/profile/[id]/signals/profile-playlists-signal";

export const useNavbarPlaylists = (playlistsData: Playlist[] | null) => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        if(!playlistsData) return;
        setPlaylists(playlistsData);
    }, [playlistsData]);

    useEffect(() => {
        effect(() => {
            const newPlaylist = profilePlaylistsSignal.value;
            if (!newPlaylist) return;
            setPlaylists((prev) => ([newPlaylist, ...prev,]));
        })
    }, []);

    return {playlists};
}