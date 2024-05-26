import ListInfoLayout from "./ListInfoLayout";
import {ListPageProps} from "@/types/ListPageProps";
import ListTitle from "@/common-components/ListPage/components/ListTitle";
import ListTopInfoLine from "@/common-components/ListPage/components/ListTopInfoLine";
import ListBottomInfoLine from "@/common-components/ListPage/components/ListBottomInfoLine";
import ListInfoButtons from "@/common-components/ListPage/components/ListInfoButtons/ListInfoButtons";

const ListInfo = (props: ListPageProps) => {
    const {list} = props;

    return (
        <ListInfoLayout>
            <ListTitle title={list.name}/>
            <ListTopInfoLine {...props}/>
            <ListBottomInfoLine {...props}/>
            <ListInfoButtons {...props}/>
        </ListInfoLayout>
    )
}

export default ListInfo;