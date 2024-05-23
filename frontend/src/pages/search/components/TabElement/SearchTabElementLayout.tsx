import {LayoutProps} from "@/types/LayoutProps";
import {changeSearchTab} from "@/pages/search/helpers";
import {SearchTab} from "@/types/SearchTab";
import { useRouter } from "next/navigation";

type SearchTabElementLayoutProps = LayoutProps & {
    selected: boolean,
    searchQuery: string,
    tab: SearchTab,
}

const SearchTabElementLayout = (props: SearchTabElementLayoutProps) => {
    const {children, selected, searchQuery, tab} = props;

    const router = useRouter();

    return (
        <div
            onClick={() => changeSearchTab(router, tab, searchQuery)}
            className={`h-8 flex items-center px-3 bg-white rounded-md cursor-pointer hover:bg-neutral-300 duration-200 ease-out
            ${selected && "bg-neutral-300"}`}>
            {children}
        </div>
    )
}

export default SearchTabElementLayout;