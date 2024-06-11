import PlayListsBlockLayout from "./PlayListsBlockLayout";
import PlayListsHeader from "@/common-components/Navbar/components/PlaylistsHeader/PlaylistsHeader";
import NewPlaylistButton from "@/common-components/Navbar/components/NewPlaylistButton";

const PlayListsBlock = () => {
    return (
        <PlayListsBlockLayout>
            <PlayListsHeader/>
            <NewPlaylistButton/>
        </PlayListsBlockLayout>
    )
}

export default PlayListsBlock;