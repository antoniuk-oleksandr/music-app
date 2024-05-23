import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/navigation";
import {changeSearchTab} from "@/pages/search/helpers";
import {SearchTab} from "@/types/SearchTab";

type ResetTabLayoutProps = LayoutProps & {
    searchQuery: string,
}

const ResetTabLayout = (props: ResetTabLayoutProps) => {
    const {children, searchQuery} = props;
    const navRouter = useRouter();

    return (
        <div
            onClick={() => changeSearchTab(navRouter, SearchTab.Default, searchQuery)}
            className={"grid place-items-center size-8 text-2xl bg-neutral-200 rounded-md cursor-pointer"}>
            {children}
        </div>
    )
}

export default ResetTabLayout;