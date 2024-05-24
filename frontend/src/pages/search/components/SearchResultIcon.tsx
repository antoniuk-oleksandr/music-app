import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {getImage} from "@/pages/search/helpers";
import {SearchTab} from "@/types/SearchTab";
import {handleSongClick} from "@/pages/search/handlers";
import {useAudio} from "@/common-components/AudioContext";
import {useDispatch} from "react-redux";

type SearchResultIcon = {
    item: Song | User | Album | Playlist;
    itemType: SearchTab;
}

const SearchResultIcon = (props: SearchResultIcon) => {
    const {item, itemType} = props;

    const audiElement = useAudio()
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => itemType === SearchTab.Songs && handleSongClick(audiElement, dispatch, item as Song)}
            className={"size-14 object-cover object-center rounded mr-2"}
            src={getImage(item)}
            alt="icon"
        />
    )
}

export default SearchResultIcon;