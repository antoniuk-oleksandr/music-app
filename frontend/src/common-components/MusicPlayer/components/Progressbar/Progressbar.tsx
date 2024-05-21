import Cursor from "@/common-components/MusicPlayer/components/Cursor";
import ProgressbarLayout from "@/common-components/MusicPlayer/components/Progressbar/ProgressbarLayout";
import BackBar from "@/common-components/MusicPlayer/components/Progressbar/BackBar";
import TopBar from "@/common-components/MusicPlayer/components/Progressbar/TopBar";

type ProgressbarProps = {
    percentage: number,
    isCursorShown: boolean,
    width: string,
    rounded: boolean
}

const Progressbar = (props: ProgressbarProps) => {
    const {percentage, isCursorShown, width, rounded} = props;

    return (
        <ProgressbarLayout width={width}>
            <Cursor percentage={percentage} isShown={isCursorShown}/>
            <BackBar rounded={rounded}/>
            <TopBar rounded={rounded} percentage={percentage}/>
        </ProgressbarLayout>
    )
}

export default Progressbar;