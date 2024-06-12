import {LayoutProps} from "@/types/LayoutProps";

const ListOfPlaylistsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={""}>
            {children}
        </div>
    )
}

export default ListOfPlaylistsLayout;