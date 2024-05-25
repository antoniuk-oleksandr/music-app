import {LayoutProps} from "@/types/LayoutProps";

const AlbumLeftRowSide = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center gap-x-6"}>
            {children}
        </div>
    )
}

export default AlbumLeftRowSide;