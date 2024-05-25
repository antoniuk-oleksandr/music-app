import PageWrapper from "@/common-components/PageWrapper";
import ListPage from "@/common-components/ListPage/ListPage";
import {useListData} from "@/common-components/use-list-data";
import {ListType} from "@/types/ListType";

const PlaylistPage = () => {
    const playListData = useListData(ListType.Playlist);

    if (!playListData) return null;
    return (
        <PageWrapper pt={'pt-12'} pb={'pb-28'}>
            <ListPage list={playListData} listType={ListType.Playlist}/>
        </PageWrapper>
    )
}

export default PlaylistPage;
