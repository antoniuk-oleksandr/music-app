import {LayoutProps} from "@/types/LayoutProps";

const AlbumSongsListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default AlbumSongsListLayout;