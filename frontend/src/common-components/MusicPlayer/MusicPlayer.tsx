import MusicPlayerLayout from "./MusicPlayerLayout";
import Progressbar from "@/common-components/MusicPlayer/components/Progressbar/Progressbar";
import Control from "@/common-components/MusicPlayer/components/Control/Control";

const MusicPlayer = () => {
    return (
        <MusicPlayerLayout>
            <Progressbar
                rounded={false}
                percentage={10}
                isCursorShown={true}
                width={"w-full"}/>
            <Control/>
        </MusicPlayerLayout>
    )
}

export default MusicPlayer;