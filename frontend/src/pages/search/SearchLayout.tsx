import {LayoutProps} from "@/types/LayoutProps";

const SearchLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default SearchLayout;