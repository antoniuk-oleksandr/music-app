import ModalFooterLayout from "../../Modal/common-components/ModalFooterLayout";
import LightButton from "@/common-components/LightButton";

type NewPlaylistModalBottomProps = {
    isSending: boolean;
}

const NewPlaylistModalFooter = (props: NewPlaylistModalBottomProps) => {
    const {isSending} = props;

    return (
        <ModalFooterLayout>
            <LightButton
                disabled={isSending}
                type={"submit"}
                className={`  
                ${isSending ? '!bg-neutral-300 active:!scale-100' : '!bg-neutral-200 hover:!bg-neutral-300'}`}
            >
                <span>Create</span>
            </LightButton>
        </ModalFooterLayout>
    )
}

export default NewPlaylistModalFooter;