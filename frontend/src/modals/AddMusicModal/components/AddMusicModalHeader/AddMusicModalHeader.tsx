import {IoClose} from "react-icons/io5";
import AddMusicModalHeaderLayout from "@/modals/AddMusicModal/components/AddMusicModalHeader/AddMusicModalHeaderLyaout";
import {useDispatch} from "react-redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";

type AddMusicModalHeaderProps = {
    modalName: string,
}

const AddMusicModalHeader = (props: AddMusicModalHeaderProps) => {
    const {modalName} = props;
    const dispatch = useDispatch();

    return (
        <AddMusicModalHeaderLayout>
            <span>Upload your song</span>
            <IoClose
                onClick={() => dispatch(setIsModalOpened({modalName, isOpened: false}))}
                className="text-xl cursor-pointer"
            />
        </AddMusicModalHeaderLayout>
    )
}

export default AddMusicModalHeader;