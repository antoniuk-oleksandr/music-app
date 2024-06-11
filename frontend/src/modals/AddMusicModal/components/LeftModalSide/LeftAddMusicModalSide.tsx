import LeftAddMusicModalSideLayout from "./LeftAddMusicModalSideLayout";
import ImageUploader from "@/common-components/ImageUploader/ImageUploader";
import Input from "@/common-components/Input/Input";
import {MutableRefObject} from "react";
import SongFileUploader from "@/common-components/SongFIieUploader/SongFileUploader";

type LeftAddMusicModalSideProps = {
    imageFileRef: MutableRefObject<File | null>,
    audioFileRef: MutableRefObject<File | null>,
}

const LeftAddMusicModalSide = (props: LeftAddMusicModalSideProps) => {
    const {imageFileRef, audioFileRef} = props;

    return (
        <LeftAddMusicModalSideLayout>
            <ImageUploader
                id={'songCover'}
                fileRef={imageFileRef}
                className={"!size-48 !m-0"}
                aspect={'none'}
            />
            <div className={"flex w-96 flex-col justify-center"}>
                <Input
                    border={'ring-neutral-500'}
                    color={'text-neutral-700'}
                    className={"!px-3 !py-2 !text-base"}
                    id={"songName"}
                    label={"Song name"}
                />
                <SongFileUploader audioFileRef={audioFileRef}/>
            </div>
        </LeftAddMusicModalSideLayout>
    )
}

export default LeftAddMusicModalSide;