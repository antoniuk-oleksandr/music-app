import {Dispatch, useEffect, useState} from "react";
import {getRepeatFromLocalStorage} from "@/utils/local-storage";
import {Repeat} from "@/types/Repeat";
import {UnknownAction} from "redux";
import {useSelector} from "react-redux";
import {setRepeat} from "@/redux/reducers/music-player-slice";

export const useRepeatButton = (dispatch: Dispatch<UnknownAction>) => {
    useEffect(() => {
        const repeat = getRepeatFromLocalStorage();
        dispatch((setRepeat(repeat)))
    }, []);
}