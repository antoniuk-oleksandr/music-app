import React, {Dispatch} from "react";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {UnknownAction} from "redux";

export const handleModalBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    dispatch: Dispatch<UnknownAction>,
    modalName: string,
) => {
    if (e.target === e.currentTarget) {
        dispatch(setIsModalOpened({modalName, isOpened: false}));
    }
};