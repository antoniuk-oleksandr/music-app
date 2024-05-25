import ListInfoLineLayout from "@/common-components/ListPage/components/ListInfoLineLayout";
import {getSongsDuration, getSongsNumberString} from "@/common-components/ListPage/helpers";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

type ListBottomInfoLine = {
    list: Album | Playlist
}

const ListBottomInfoLine = (props: ListBottomInfoLine) => {
    const {list} = props;
    const songDuration = getSongsDuration(list.songs);

    return (
        <ListInfoLineLayout>
            <span>{getSongsNumberString(list.songs)}</span>
            {songDuration !== '' ? <span>•</span> : null}
            <span>{songDuration}</span>
        </ListInfoLineLayout>
    )
}

export default ListBottomInfoLine;