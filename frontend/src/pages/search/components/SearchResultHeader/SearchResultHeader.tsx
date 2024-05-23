import SearchResultHeaderLayout from "./SearchResultHeaderLayout";

type SearchResultHeaderProps = {
    text: string,
}

const SearchResultHeader = (props: SearchResultHeaderProps) => {
    const {text} = props;

    return (
        <SearchResultHeaderLayout>
            <span>{text}</span>
        </SearchResultHeaderLayout>
    )
}

export default SearchResultHeader;