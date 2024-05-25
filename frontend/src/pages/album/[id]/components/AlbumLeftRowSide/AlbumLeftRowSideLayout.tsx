import {LayoutProps} from "@/types/LayoutProps";

const AlbumLeftRowSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div
            className={"flex items-center gap-x-6"}>
            {children}
        </div>
    )
}

export default AlbumLeftRowSideLayout;