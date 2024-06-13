import {LayoutProps} from "@/types/LayoutProps";
import {useDispatch, useSelector} from "react-redux";
import {handleAddPlaylistModalPlaylistClick} from "@/modals/AddSongToPlaylistModal/handlers";
import {TokenInfo} from "@/types/TokenInfo";
import {Dispatch, SetStateAction} from "react";

type AddToPlaylistModalPlaylistLayoutProps = LayoutProps & {
    modalName: string,
    id: number,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const AddToPlaylistModalPlaylistLayout = (props: AddToPlaylistModalPlaylistLayoutProps) => {
    const {children, modalName, id} = props;
    const dispatch = useDispatch();
    const tokenInfo: TokenInfo = useSelector((state: any) => state.token.tokens);
    const modalState = useSelector((state: any) => state.modals);
    const playlists = useSelector((state: any) => state.userProfile.playlists);

    if(!modalState[modalName].additionalData) return null;

    const {song} = modalState[modalName].additionalData;

    return (
        <div
            onClick={() => handleAddPlaylistModalPlaylistClick(dispatch, modalName, id, tokenInfo, song, playlists)}
            className={"py-2 gap-x-4 flex px-6 cursor-pointer hover:bg-neutral-200 duration-200 ease-out max-w-96"}>
            {children}
        </div>
    )
}

export default AddToPlaylistModalPlaylistLayout;