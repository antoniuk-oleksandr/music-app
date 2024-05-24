import {changeSearchTab} from "@/pages/search/helpers";
import {SearchTab} from "@/types/SearchTab";
import {useRouter} from "next/navigation";

type ShowMoreButtonProps = {
    tab: SearchTab,
    searchQuery: string,
    selectedTab: SearchTab,
}

const ShowAllButton = (props: ShowMoreButtonProps) => {
    const {tab, searchQuery, selectedTab} = props;
    const router = useRouter();

    if (selectedTab !== SearchTab.Default) return null;
    return (
        <button
            onClick={() => changeSearchTab(router, tab, searchQuery)}
            className={"cursor-pointer px-4 py-2 rounded-full cur text-sm bg-white font-semibold hover:bg-neutral-200 duration-300 ease-out"}
            type="button"
        >Show All</button>
    )
}

export default ShowAllButton;