import {useDispatch} from "react-redux";
import {useCreateModal} from "@/modals/useCreateModal";
import ModalElement from "@/common-components/ModalElement/ModalElement";
import NewPlaylistModalHeader from "@/modals/NewPlaylistModal/components/NewPlaylistModalHeader/NewPlaylistModalHeader";
import NewPlaylistModalForm from "@/modals/NewPlaylistModal/NewPlaylistModalForm";
import NewPlaylistModalBody from "./components/NewPlaylistModalBody/NewPlaylistModalBody";
import NewPlaylistModalFooter from "@/modals/NewPlaylistModal/components/NewPlaylistModalFooter/NewPlaylistModalFooter";
import {useState} from "react";

const NewPlaylistModal = () => {
    const dispatch = useDispatch();
    const modalName = 'newPlaylistModal';
    useCreateModal(modalName, dispatch);
    const [isSending, setSending] = useState<boolean>(false);

    return (
        <ModalElement modalName={modalName}>
            <NewPlaylistModalForm setSending={setSending} modalName={modalName}>
                <NewPlaylistModalHeader modalName={modalName}/>
                <NewPlaylistModalBody/>
                <NewPlaylistModalFooter isSending={isSending}/>
            </NewPlaylistModalForm>
        </ModalElement>
    )
}

export default NewPlaylistModal;