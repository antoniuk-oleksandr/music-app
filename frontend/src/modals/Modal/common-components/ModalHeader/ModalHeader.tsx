import ModalHeaderLayout from "./ModalHeaderLayout";
import {IoClose} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";

type NewPlaylistModalHeaderProps = {
    modalName: string,
    text: string,
}

const ModalHeader = (props: NewPlaylistModalHeaderProps) => {
    const {modalName, text} = props;
    const dispatch = useDispatch();

    return (
        <ModalHeaderLayout>
            <span>{text}</span>
            <div
                onClick={() => dispatch(setIsModalOpened({modalName, isOpened: false}))}
                className="grid text-xl cursor-pointer duration-200 ease-out  size-6 place-items-center active:scale-95 hover:bg-neutral-300 rounded-full">
                <IoClose/>
            </div>
        </ModalHeaderLayout>
    )
}

export default ModalHeader;