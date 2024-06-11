import SongFileUploaderLayout from "./SongFileUploaderLayout";
import {MutableRefObject, useRef, useState} from "react";
import SongFileInput from "@/common-components/SongFIieUploader/components/SongFileInput";
import ChooseSongFileButton from "@/common-components/SongFIieUploader/components/ChooseSongFileButton";
import ChosenAudioFileName from "./components/ChosenAudioFileName";
import ChooseSongLayout from "@/common-components/SongFIieUploader/components/ChooseSongLayout";

type SongFileUploaderProps = {
    audioFileRef: MutableRefObject<File | null>,
}

const SongFileUploader = (props: SongFileUploaderProps) => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState<string | null>(null);

    return (
        <SongFileUploaderLayout>
            <SongFileInput
                {...props}
                id={"audioFile"}
                setFileName={setFileName}
                inputRef={inputRef}
            />
            <ChooseSongLayout>
                <ChooseSongFileButton inputRef={inputRef}/>
                <ChosenAudioFileName fileName={fileName}/>
            </ChooseSongLayout>
        </SongFileUploaderLayout>
    )
}

export default SongFileUploader;