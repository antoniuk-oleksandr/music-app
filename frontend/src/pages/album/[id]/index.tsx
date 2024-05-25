import PageWrapper from "@/common-components/PageWrapper";
import {Album} from "@/types/Album";
import {useAlbumData} from "@/pages/album/[id]/use-album-data";
import ListPage from "@/common-components/ListPage/ListPage";
import {ListType} from "@/types/ListType";

const AlbumPage = () => {
    const albumData = useAlbumData();

    if (!albumData) return null;
    return (
        <PageWrapper pt={'pt-12'} pb={'pb-28'}>
            <ListPage list={albumData as Album} listType={ListType.Album}/>
        </PageWrapper>
    )
}

export default AlbumPage;
