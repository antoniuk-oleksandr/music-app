import {Dispatch, useEffect} from "react";
import {UnknownAction} from "redux";
import {addMenu} from "@/redux/reducers/menu-slice";

export const useCreateMenu = (modalName: string, dispatch: Dispatch<UnknownAction>) => {
    useEffect(() => {
        dispatch(addMenu(modalName));
    }, []);
}
