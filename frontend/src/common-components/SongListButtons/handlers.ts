import React, {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setIsMenuOpened} from "@/redux/reducers/menu-slice";

export const handleMoreSongsActionsClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    dispatch: Dispatch<UnknownAction>,
) => {
    let {x, y, width, height} = (e.target as HTMLDivElement).getBoundingClientRect();
    x += width;
    y += height;

    dispatch(setIsMenuOpened({
        menuName: 'moreSongActionsMenu',
        isOpened: true, x, y}));
}