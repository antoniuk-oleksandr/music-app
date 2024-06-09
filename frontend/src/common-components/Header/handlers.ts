import {setTokenStore} from "@/redux/reducers/token-slice";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {clearJwtCookies} from "@/utils/utils";
import {setDialog, setIsDialogShown} from "@/redux/reducers/dialog-slice";

export const handleSignOutButtonClick = (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setTokenStore([false, null]));
    clearJwtCookies();

    dispatch(setDialog([true, 'You have successfully logged out.', 'text-green-500']));
    setTimeout(() => {
        dispatch(setIsDialogShown(false));
    }, 3500);
}