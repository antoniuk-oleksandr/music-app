import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {SearchTab} from "@/types/SearchTab";
import SongBottomInfo from "@/pages/search/components/SongBottomInfo";
import UserBottomInfo from "@/pages/search/components/UserBottomInfo";
import SongListBottomInfo from "@/pages/search/components/SongListBottomInfo";

type BottomItemInfo = {
    item: Song | User | Album | Playlist;
    itemType: SearchTab;
}

const BottomItemInfo = (props: BottomItemInfo) => {
    const {item, itemType} = props;

    switch (itemType) {
        case SearchTab.Songs:
            return <SongBottomInfo song={item as Song}/>
        case SearchTab.Artists:
        case SearchTab.Profiles:
            return <UserBottomInfo user={item as User} type={itemType}/>
        case SearchTab.Playlists:
        case SearchTab.Albums:
            return <SongListBottomInfo item={item as Album | Playlist}/>
    }

    return null;
}

export default BottomItemInfo;