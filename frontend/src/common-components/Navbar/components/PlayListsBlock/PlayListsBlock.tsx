import PlayListsBlockLayout from "./PlayListsBlockLayout";
import PlayListsHeader from "@/common-components/Navbar/components/PlaylistsHeader/PlaylistsHeader";
import NewPlaylistButton from "@/common-components/Navbar/components/NewPlaylistButton";
import ListOfPlaylists from "@/common-components/Navbar/components/ListOfPlaylists/ListOfPlaylists";

const PlayListsBlock = () => {
    return (
        <PlayListsBlockLayout>
            <PlayListsHeader/>
            <NewPlaylistButton/>
            <ListOfPlaylists/>
        </PlayListsBlockLayout>
    )
}

export default PlayListsBlock;