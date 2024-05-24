import {LayoutProps} from "@/types/LayoutProps";

const SearchResultTextLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex flex-col text-base gap-y-1 leading-5">
            {children}
        </div>
    )
}

export default SearchResultTextLayout;