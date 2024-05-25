import {LayoutProps} from "@/types/LayoutProps";

type AlbumSongRowLayoutProps = LayoutProps & {
    topBorder: boolean
}

const AlbumSongRowLayout = (props: AlbumSongRowLayoutProps) => {
    const {children, topBorder} = props;

    return (
        <div className={`flex items-center justify-between h-14 px-2 
        ${topBorder ? 'border-t border-neutral-200' : ''}`}>
            {children}
        </div>
    )
}

export default AlbumSongRowLayout;