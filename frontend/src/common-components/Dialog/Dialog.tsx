import DialogLayout from "./DialogLayout";
import {useSelector} from "react-redux";
import {DialogState} from "@/types/DialogState";

const Dialog = () => {
    const dialogState: DialogState = useSelector((state: any) => state.dialog);
    const {text} = dialogState;

    return (
        <DialogLayout dialogState={dialogState}>
            <span>{text}</span>
        </DialogLayout>
    )
}

export default Dialog;