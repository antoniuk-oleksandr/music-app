import {useDispatch} from "react-redux";
import {useCreateModal} from "@/modals/Modal/useCreateModal";
import ModalElement from "@/common-components/ModalElement/ModalElement";
import ModalHeader from "@/modals/Modal/common-components/ModalHeader/ModalHeader";
import NewPlaylistModalForm from "@/modals/NewPlaylistModal/NewPlaylistModalForm";
import NewPlaylistModalBody from "./components/NewPlaylistModalBody";
import NewPlaylistModalFooter from "@/modals/NewPlaylistModal/components/NewPlaylistModalFooter";
import {useState} from "react";

const NewPlaylistModal = () => {
    const dispatch = useDispatch();
    const modalName = 'newPlaylistModal';
    useCreateModal(modalName, dispatch);
    const [isSending, setSending] = useState<boolean>(false);

    return (
        <ModalElement modalName={modalName}>
            <NewPlaylistModalForm setSending={setSending} modalName={modalName}>
                <ModalHeader text={'New playlist'} modalName={modalName}/>
                <NewPlaylistModalBody/>
                <NewPlaylistModalFooter isSending={isSending}/>
            </NewPlaylistModalForm>
        </ModalElement>
    )
}

export default NewPlaylistModal;