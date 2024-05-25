import {HiOutlineDotsVertical} from "react-icons/hi";

const ListOptionsButton = () => {
    return (
        <button
            className={"font-medium text-xl size-9 grid place-items-center rounded-full hover:bg-neutral-200 focus:outline-0 active:scale-95"}
            type="button"
        >
            <HiOutlineDotsVertical/>
        </button>
    )
}

export default ListOptionsButton;