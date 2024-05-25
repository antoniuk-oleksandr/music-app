import AlbumRightRowSideLayout from "./AlbumRightRowSideLayout";
import {formatTime} from "@/common-components/MusicPlayer/helpers";

type AlbumRightRowSideProps = {
    duration: number,
}

const AlbumRightRowSide = (props: AlbumRightRowSideProps) => {
    const {duration} = props;

    return (
        <AlbumRightRowSideLayout>
            <span>{formatTime(duration)}</span>
        </AlbumRightRowSideLayout>
    )
}

export default AlbumRightRowSide;