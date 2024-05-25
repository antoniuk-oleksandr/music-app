import ListHeader from "@/common-components/ListPage/components/ListHeader/ListHeader";
import {ListPageProps} from "@/types/ListPageProps";
import {ListType} from "@/types/ListType";
import AlbumSongsList from "@/common-components/ListPage/components/AlbumSongsList/AlbumSongsList";

const ListPage = (props: ListPageProps) => {
    const {list, listType} = props;

    return (
        <>
            <ListHeader {...props}/>
            {listType === ListType.Album ? <AlbumSongsList songs={list.songs}/> : null}
        </>
    )
}

export default ListPage;