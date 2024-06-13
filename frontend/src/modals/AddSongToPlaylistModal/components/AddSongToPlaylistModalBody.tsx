import {useSelector} from "react-redux";
import {Playlist} from "@/types/Playlist";
import AddToPlaylistModalPlaylist
    from "@/modals/AddSongToPlaylistModal/components/AddToPlaylistModalPlaylist/AddToPlaylistModalPlaylist";
import {useAddToPlaylistModalPlaylists} from "@/modals/AddSongToPlaylistModal/use-add-to-playlist-modal-playlists";
import AddSongToPlaylistModalBodyLayout
    from "@/modals/AddSongToPlaylistModal/components/AddSongToPlaylistModalBodyLayout";
import {Dispatch, SetStateAction} from "react";

type AddSongToPlaylistModalBodyProps = {
    modalName: string,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const AddSongToPlaylistModalBody = (props: AddSongToPlaylistModalBodyProps) => {
    const playlistsData: Playlist[] | null = useSelector((state: any) => state.userProfile.playlists);
    const {playlists} = useAddToPlaylistModalPlaylists(playlistsData);

    if (!playlists) return null;
    return (
        <AddSongToPlaylistModalBodyLayout>
            {playlists.map((playlist, index) => (
                <AddToPlaylistModalPlaylist
                    {...props}
                    {...playlist}
                    key={index}
                />
            ))}
        </AddSongToPlaylistModalBodyLayout>
    )
}

export default AddSongToPlaylistModalBody;