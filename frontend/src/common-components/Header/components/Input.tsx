import {useFormContext} from "react-hook-form";

const SearchInput = () => {
    const {register} = useFormContext();

    return (
        <input
            {...register("search", {required: true})}
            placeholder="Search songs, artists, albums..."
            className={"w-full text-base focus:outline-0 bg-transparent focus:outline"}
            type={"text"}
        />
    )
}

export default SearchInput;