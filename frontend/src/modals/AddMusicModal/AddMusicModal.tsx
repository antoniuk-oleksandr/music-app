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
import {useCreateModal} from "@/modals/useCreateModal";

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