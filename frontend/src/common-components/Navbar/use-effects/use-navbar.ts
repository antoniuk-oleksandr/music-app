import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Device} from "@/types/Device";
import {setIsNavbarHidden} from "@/redux/reducers/wrap-slice";

export const useNavbar = () => {
    const {isNavbarHidden, device} = useSelector((state: any) => state.wrapper);
    const dispatch = useDispatch();

    useEffect(() => {
        if(device === Device.Mobile) dispatch(setIsNavbarHidden(true));
        else dispatch(setIsNavbarHidden(false));
    }, []);

    return false;
}