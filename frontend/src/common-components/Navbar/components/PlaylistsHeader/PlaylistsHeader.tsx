import {FiPlus} from "react-icons/fi";
import PlaylistsHeaderLayout from "@/common-components/Navbar/components/PlaylistsHeader/PlaylistsHeaderLayout";

const PlaylistsHeader = () => {
    return (
        <PlaylistsHeaderLayout>
            <span>playlists</span>
            <FiPlus className={"text-base cursor-pointer"}/>
        </PlaylistsHeaderLayout>
    )
}

export default PlaylistsHeader;