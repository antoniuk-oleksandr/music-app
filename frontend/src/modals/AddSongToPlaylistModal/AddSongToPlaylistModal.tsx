import {useState} from "react";
import {useCreateModal} from "@/modals/Modal/useCreateModal";
import {useDispatch} from "react-redux";
import ModalHeader from "@/modals/Modal/common-components/ModalHeader/ModalHeader";
import ModalElement from "@/common-components/ModalElement/ModalElement";
import AddSongToPlaylistModalFooter from "@/modals/AddSongToPlaylistModal/components/AddSongToPlaylistModalFooter";
import AddSongToPlaylistModalBody from "./components/AddSongToPlaylistModalBody";

const AddSongToPlaylistModal = () => {
    const modalName = "addSongToPlaylistModal";
    const dispatch = useDispatch();
    useCreateModal(modalName, dispatch);
    const [sending, setSending] = useState(false);

    return (
        <ModalElement
            additionalStyles="w-96"
            modalName={modalName}
        >
            <ModalHeader text={"Save to playlist"} modalName={modalName}/>
            <AddSongToPlaylistModalBody setSending={setSending} modalName={modalName}/>
            <AddSongToPlaylistModalFooter sending={sending}/>
        </ModalElement>
    )
}

export default AddSongToPlaylistModal;