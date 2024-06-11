import NewPlaylistModalHeaderLayout from "./NewPlaylistModalHeaderLayout";
import {IoClose} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";

type NewPlaylistModalHeaderProps = {
    modalName: string,
}

const NewPlaylistModalHeader = (props: NewPlaylistModalHeaderProps) => {
    const {modalName} = props;
    const dispatch = useDispatch();

    return (
        <NewPlaylistModalHeaderLayout>
            <span>New playlist</span>
            <IoClose
                onClick={() => dispatch(setIsModalOpened({modalName, isOpened: false}))}
                className={"text-xl cursor-pointer duration-200 ease-out active:scale-95 hover:text-neutral-500"}/>
        </NewPlaylistModalHeaderLayout>
    )
}

export default NewPlaylistModalHeader;