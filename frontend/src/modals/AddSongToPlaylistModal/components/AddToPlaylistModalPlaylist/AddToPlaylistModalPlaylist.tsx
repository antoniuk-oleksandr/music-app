import AddToPlaylistModalPlaylistLayout from "./AddToPlaylistModalPlaylistLayout";
import {Playlist} from "@/types/Playlist";
import AddToPlaylistModalPlaylistImage
    from "@/modals/AddSongToPlaylistModal/components/AddToPlaylistModalPlaylistImage";
import {Dispatch, SetStateAction} from "react";
import AddToPlaylistModalPlaylistInfo
    from "@/modals/AddSongToPlaylistModal/components/AddToPlaylistModalPlaylist/AddToPlaylistModalPlaylistInfo";

type AddSongToPlaylistModalPlaylistProps = Playlist & {
    modalName: string,
    setSending: Dispatch<SetStateAction<boolean>>,
};

const AddToPlaylistModalPlaylist = (props: AddSongToPlaylistModalPlaylistProps) => {
    return (
        <AddToPlaylistModalPlaylistLayout {...props}>
            <AddToPlaylistModalPlaylistImage {...props}/>
            <AddToPlaylistModalPlaylistInfo {...props}/>
        </AddToPlaylistModalPlaylistLayout>
    )
}

export default AddToPlaylistModalPlaylist;