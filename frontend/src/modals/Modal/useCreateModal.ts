import {Dispatch, useEffect} from "react";
import {UnknownAction} from "redux";
import {addModal} from "@/redux/reducers/modal-slice";

export const useCreateModal = (modalName: string, dispatch: Dispatch<UnknownAction>) => {
    useEffect(() => {
        dispatch(addModal(modalName));
    }, []);
}
