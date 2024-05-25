import {usePlaylistData} from "@/pages/playlist/[id]/use-playlist-data";
import PageWrapper from "@/common-components/PageWrapper";
import ListPage from "@/common-components/ListPage/ListPage";

const PlaylistPage = () => {
    const playListData = usePlaylistData();

    if (!playListData) return null;
    return (
        <PageWrapper pt={'pt-12'} pb={'pb-28'}>
            <ListPage listType={ListType.Playlist}/>
        </PageWrapper>
    )
}

export default PlaylistPage;
