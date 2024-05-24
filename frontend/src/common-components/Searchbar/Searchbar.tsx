import SearchbarLayout from "./SearchbarLayout";
import {IoSearch} from "react-icons/io5";
import SearchInput from "@/common-components/Header/components/Input";
import {useSearchbarValue} from "@/common-components/Searchbar/use-searchbar-value";

const Searchbar = () => {
    const value = useSearchbarValue();

    if (value === null) return null;
    return (
        <SearchbarLayout value={value}>
            <IoSearch/>
            <SearchInput/>
        </SearchbarLayout>
    )
}

export default Searchbar;