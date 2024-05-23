import {LayoutProps} from "@/types/LayoutProps";

const SearchResultHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-2xl py-4 font-bold first-letter:uppercase"}>
            {children}
        </div>
    )
}

export default SearchResultHeaderLayout;