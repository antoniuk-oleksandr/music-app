import ModalElement from "@/common-components/ModalElement/ModalElement";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import {addModal} from "@/redux/reducers/modal-slice";
import AddMusicModalHeader from "./components/AddMusicModalHeader/AddMusicModalHeader";
import ImageUploader from "@/common-components/ImageUploader/ImageUploader";
import LightButton from "@/common-components/LightButton";
import AddMusicForm from "./AddMusicForm";
import Input from "@/common-components/Input/Input";
import LeftAddMusicModalSide from "@/modals/AddMusicModal/components/LeftModalSide/LeftAddMusicModalSide";

const AddMusicModal = () => {
    const dispatch = useDispatch();
    const modalName = 'addMusic';
    const imageFileRef = useRef<File | null>(null);
    const audioFileRef = useRef<File | null>(null);

    useEffect(() => {
        dispatch(addModal('addMusic'));
    }, []);

    return (
        <ModalElement name={modalName}>
            <AddMusicForm audioFileRef={audioFileRef} imageFileRef={imageFileRef}>
                <AddMusicModalHeader modalName={modalName}/>
                <LeftAddMusicModalSide audioFileRef={audioFileRef} imageFileRef={imageFileRef}/>
                <LightButton
                    type={"submit"}
                    className={"!bg-red-500 mb-4 mx-4 text-white w-40 flex justify-center self-end"}
                >Upload</LightButton>
            </AddMusicForm>
        </ModalElement>
    )
}

export default AddMusicModal;