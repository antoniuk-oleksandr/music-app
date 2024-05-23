import {LayoutProps} from "@/types/LayoutProps";

const SearchResultRowLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full px-2 h-20 flex items-center"}>
            {children}
        </div>
    )
}

export default SearchResultRowLayout;