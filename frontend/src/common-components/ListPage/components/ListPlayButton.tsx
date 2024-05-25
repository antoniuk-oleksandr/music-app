import {IoPlay} from "react-icons/io5";

const ListPlayButton = () => {
    return (
        <button
            className={"font-medium flex gap-x-1.5 items-center py-1.5 bg-white rounded-full px-4 hover:bg-neutral-200 focus:outline-0 active:scale-95"}
            type="button"
        >
            <IoPlay />
            <span>Play</span>
        </button>
    )
}

export default ListPlayButton