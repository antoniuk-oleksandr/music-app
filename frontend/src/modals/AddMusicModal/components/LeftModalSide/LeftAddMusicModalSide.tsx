import LeftAddMusicModalSideLayout from "./LeftAddMusicModalSideLayout";
import ImageUploader from "@/common-components/FileUploader/ImageUploader";
import Input from "@/common-components/Input/Input";

const LeftAddMusicModalSide = () => {
    return (
        <LeftAddMusicModalSideLayout>
            <ImageUploader className={"!size-48"} aspect={'none'}/>
            <div className={"mx-4 flex items-center w-96"}>
                <Input
                    border={'ring-neutral-500'}
                    color={'text-neutral-400'}
                    className={"!px-3 !py-2 !text-base"}
                    id={"songName"}
                    label={"Song name"}/>
            </div>
        </LeftAddMusicModalSideLayout>
    )
}

export default LeftAddMusicModalSide;