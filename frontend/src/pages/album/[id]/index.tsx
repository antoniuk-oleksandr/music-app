import Wrapper from "@/common-components/Wrapper/Wrapper";
import {useListData} from "@/common-components/use-list-data";
import ListPage from "@/common-components/ListPage/ListPage";
import {ListType} from "@/types/ListType";

const AlbumPage = () => {
    const albumData = useListData(ListType.Album);

    if (!albumData) return null;
    return (
        <Wrapper pt={'pt-12'} pb={'pb-28'}>
            <ListPage list={albumData} listType={ListType.Album}/>
        </Wrapper>
    )
}

export default AlbumPage;
