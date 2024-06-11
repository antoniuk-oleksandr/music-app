import { setIsModalOpened } from "@/redux/reducers/modal-slice";
import { GoPlus } from "react-icons/go";
import {useDispatch} from "react-redux";

const NewPlaylistButton = () => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(setIsModalOpened({modalName: 'newPlaylistModal', isOpened: true}))}
            className={"flex gap-x-1.5 font-semibold bg-neutral-200 rounded-full py-1.5 w-full justify-center px-3 my-4 outline-none duration-200 ease-out active:scale-95 hover:bg-neutral-300"}>
            <GoPlus className={"text-2xl"} />
            <span>New playlist</span>
        </button>
    )
}

export default NewPlaylistButton;