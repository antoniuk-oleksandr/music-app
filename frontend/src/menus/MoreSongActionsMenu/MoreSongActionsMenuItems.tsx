import {MdOutlineLibraryAdd, MdPlaylistAdd, MdPlaylistPlay} from "react-icons/md";
import {PiShareFat} from "react-icons/pi";
import {MenuItemType} from "@/types/MenuItemType";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {MenuState} from "@/types/MenuState";

export const getMoreSongActionMenuItems = (
    dispatch: Dispatch<UnknownAction>,
    menuState: MenuState,
): MenuItemType[] => {

    return [
        {
            title: "Save to library",
            icon: <MdOutlineLibraryAdd/>,
            clickAction: () => {
            },
        },
        {
            title: "Save to playlist",
            icon: <MdPlaylistAdd/>,
            clickAction: () => {
                dispatch(setIsModalOpened({
                    modalName : 'addSongToPlaylistModal',
                    isOpened: true,
                    additionalData: menuState.additionalData,
                }))
            },
        },
        {
            title: "Play next",
            icon: <MdPlaylistPlay/>,
            clickAction: () => {
            },
        },
        {
            title: "Add to queue",
            icon: <MdPlaylistAdd/>,
            clickAction: () => {
            },
        },
        {
            title: "Share",
            icon: <PiShareFat/>,
            clickAction: () => {
            },
        }
    ]
}