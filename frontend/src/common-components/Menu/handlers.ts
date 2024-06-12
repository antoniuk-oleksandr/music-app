import React, {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setIsMenuOpened} from "@/redux/reducers/menu-slice";

export const handleMenuBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuName: string,
    dispatch: Dispatch<UnknownAction>
) => {
    if (e.target === e.currentTarget) {
        dispatch(setIsMenuOpened({menuName, isOpened: false, x: null, y: null}));
    }
}