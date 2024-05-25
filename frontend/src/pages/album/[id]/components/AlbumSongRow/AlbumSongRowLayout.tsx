import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";

type AlbumSongRowLayoutProps = LayoutProps & {
    topBorder: boolean;
    setHovered: Dispatch<SetStateAction<boolean>>;
}

const AlbumSongRowLayout = (props: AlbumSongRowLayoutProps) => {
    const {children, topBorder, setHovered} = props;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex items-center justify-between h-14 px-2 
            ${topBorder ? 'border-t border-neutral-200' : ''}`}>
            {children}
        </div>
    )
}

export default AlbumSongRowLayout;