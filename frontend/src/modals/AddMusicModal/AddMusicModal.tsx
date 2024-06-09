import ModalElement from "@/common-components/ModalElement/ModalElement";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addModal} from "@/redux/reducers/modal-slice";
import AddMusicModalHeader from "./components/AddMusicModalHeader/AddMusicModalHeader";
import ImageUploader from "@/common-components/FileUploader/ImageUploader";
import LightButton from "@/common-components/LightButton";
import AddMusicForm from "./AddMusicForm";
import Input from "@/common-components/Input/Input";

const AddMusicModal = () => {
    const dispatch = useDispatch();
    const modalName = 'addMusic';

    useEffect(() => {
        dispatch(addModal('addMusic'));
    }, []);

    return (
        <ModalElement name={modalName}>
            <AddMusicForm>
                <AddMusicModalHeader modalName={modalName}/>
                <div className="flex justify-between">
                    <ImageUploader className={"!size-48"} aspect={'none'}/>
                    <div className={"mx-4 flex items-center w-96"}>
                        <Input
                            border={'ring-neutral-500'}
                            color={'text-neutral-400'}
                            className={"!px-3 !py-2 !text-base"}
                            id={"songName"}
                            label={"Song name"}/>
                    </div>
                </div>
                <LightButton
                    type={"submit"}
                    className={"!bg-red-500 mb-4 mx-4 text-white w-40 flex justify-center self-end"}
                >Upload</LightButton>
            </AddMusicForm>
        </ModalElement>
    )
}

export default AddMusicModal;