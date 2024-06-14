import {setTokenStore} from "@/redux/reducers/token-slice";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {clearJwtCookies, showDialog} from "@/utils/utils";

export const handleSignOutButtonClick = (
    dispatch: Dispatch<UnknownAction>,
    dialogIds: any[],
) => {
    dispatch(setTokenStore([false, null]));
    clearJwtCookies();

    showDialog(dispatch, 'You have successfully logged out.', 'text-green-500', dialogIds);
}