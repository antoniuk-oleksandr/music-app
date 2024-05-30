import ListInfoLineLayout from "./ListInfoLineLayout";
import {ListPageProps} from "@/types/ListPageProps";
import {getYearFromTimestamp} from "@/utils/utils";
import UserLink from "@/common-components/UserLink";

const ListTopInfoLine = (props: ListPageProps) => {
    const {list, listType} = props;

    console.log(list, listType);

    return (
        <ListInfoLineLayout>
            <span>{listType}</span>
            <span>•</span>
            <UserLink user={list.creator}/>
            <span>•</span>
            <span>{getYearFromTimestamp(list.creatingDate)}</span>
        </ListInfoLineLayout>
    )
}

export default ListTopInfoLine;