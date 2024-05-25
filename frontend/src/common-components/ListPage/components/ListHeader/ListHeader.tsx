import ListHeaderLayout from "./ListHeaderLayout";
import {ListPageProps} from "@/types/ListPageProps";
import ListImage from "@/common-components/ListPage/components/ListImage";
import ListInfo from "@/common-components/ListPage/components/ListInfo/ListInfo";

const ListHeader = (props: ListPageProps) => {
    const {list} = props;

    return (
        <ListHeaderLayout>
            <ListImage imageSrc={list.imagePath}/>
            <ListInfo {...props}/>
        </ListHeaderLayout>
    )
}

export default ListHeader;