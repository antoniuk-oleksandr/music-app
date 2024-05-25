import ListHeader from "@/common-components/ListPage/components/ListHeader/ListHeader";
import {ListPageProps} from "@/types/ListPageProps";
import {ListType} from "@/types/ListType";
import AlbumSongsList from "@/pages/album/[id]/components/AlbumSongsList/AlbumSongsList";
import PlaylistSongsList from "@/pages/playlist/[id]/components/PlaylistSongsList/PlaylistSongsList";

const ListPage = (props: ListPageProps) => {
    const {list, listType} = props;

    return (
        <>
            <ListHeader {...props}/>
            {listType === ListType.Album
                ? <AlbumSongsList songs={list.songs}/>
                : <PlaylistSongsList songs={list.songs}/>
            }
        </>
    )
}

export default ListPage;