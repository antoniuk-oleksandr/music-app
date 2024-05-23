import TabsBlockLayout from "./TabsBlockLayout";
import {SearchTab} from "@/types/SearchTab";
import SearchTabElement from "@/pages/search/components/TabElement/SearchTabElement";
import {Key} from "react";
import ResetTab from "@/pages/search/components/ResetTab/ResetTab";
import {SearchResult} from "@/types/SearchResult";

type TabsBlockProps = {
    selectedTab: SearchTab,
    searchQuery: string,
    searchResult: SearchResult,
}

const TabsBlock = (props: TabsBlockProps) => {
    const {selectedTab, searchQuery, searchResult} = props;
    const tabs = Object.values(SearchTab).filter((v) => v !== SearchTab.Default);

    return (
        <TabsBlockLayout>
            <ResetTab searchQuery={searchQuery} selectedTab={selectedTab}/>
            {tabs.map((tab: SearchTab, i: Key) => (
                <SearchTabElement
                    searchResult={searchResult}
                    searchQuery={searchQuery}
                    selectedTab={selectedTab}
                    tab={tab} key={i}
                />
            ))}
        </TabsBlockLayout>
    )
}

export default TabsBlock;