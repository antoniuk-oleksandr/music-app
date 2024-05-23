import SearchbarLayout from "./SearchbarLayout";
import {IoSearch} from "react-icons/io5";
import SearchInput from "@/common-components/Header/components/Input";

const Searchbar = () => {
    return (
        <SearchbarLayout>
            <IoSearch/>
            <SearchInput/>
        </SearchbarLayout>
    )
}

export default Searchbar;