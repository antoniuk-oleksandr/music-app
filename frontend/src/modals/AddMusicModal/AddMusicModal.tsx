import ModalElement from "@/common-components/ModalElement/ModalElement";
import {useDispatch} from "react-redux";
import {useRef} from "react";
import AddMusicModalHeader from "./components/AddMusicModalHeader/AddMusicModalHeader";
import LightButton from "@/common-components/LightButton";
import AddMusicForm from "./AddMusicForm";
import LeftAddMusicModalSide from "@/modals/AddMusicModal/components/LeftModalSide/LeftAddMusicModalSide";
import {useCreateModal} from "@/modals/Modal/useCreateModal";

const AddMusicModal = () => {
    const dispatch = useDispatch();
    const modalName = 'addMusic';
    useCreateModal(modalName, dispatch);

    const imageFileRef = useRef<File | null>(null);
    const audioFileRef = useRef<File | null>(null);

    return (
        <ModalElement modalName={modalName}>
            <AddMusicForm audioFileRef={audioFileRef} imageFileRef={imageFileRef}>
                <AddMusicModalHeader modalName={modalName}/>
                <LeftAddMusicModalSide audioFileRef={audioFileRef} imageFileRef={imageFileRef}/>
                <LightButton
                    type={"submit"}
                    className={"!bg-neutral-200 m-6 mt-4 hover:!bg-neutral-300 w-40 flex justify-center self-end"}
                >Upload</LightButton>
            </AddMusicForm>
        </ModalElement>
    )
}

export default AddMusicModal;