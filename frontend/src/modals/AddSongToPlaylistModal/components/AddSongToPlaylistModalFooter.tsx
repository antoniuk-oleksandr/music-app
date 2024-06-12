import ModalFooterLayout from "@/modals/Modal/common-components/ModalFooterLayout";
import {GoPlus} from "react-icons/go";
import LightButton from "@/common-components/LightButton";

type AddSongToPlaylistModalFooterProps = {
    sending: boolean,
}

const AddSongToPlaylistModalFooter =  (props: AddSongToPlaylistModalFooterProps) => {
    const {sending} = props;

    return (
        <ModalFooterLayout>
            <LightButton
                className={`flex items-center  
                    ${sending ? 'bg-neutral-300 active:!scale-100' : '!bg-neutral-200 hover:!bg-neutral-300'}`}
                disabled={sending}
                onClick={() => console.log("close")}>
                <GoPlus className={"text-2xl"}/>
                <span>New playlist</span>
            </LightButton>
        </ModalFooterLayout>
    )
}

export default AddSongToPlaylistModalFooter;