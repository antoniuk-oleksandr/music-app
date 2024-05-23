import ResetTabLayout from "./ResetTabLayout";
import {SearchTab} from "@/types/SearchTab";
import {IoClose} from "react-icons/io5";
import {SearchResult} from "@/types/SearchResult";

type ResetTabProps = {
    selectedTab: SearchTab,
    searchQuery: string,
}

const ResetTab = (props: ResetTabProps) => {
    const {selectedTab, searchQuery} = props;

    if(selectedTab == SearchTab.Default) return null;
    return (
        <ResetTabLayout searchQuery={searchQuery}>
            <IoClose />
        </ResetTabLayout>
    )
}

export default ResetTab;