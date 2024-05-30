import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeIsNavbarHidden, setDevice, setIsNavbarHidden} from "@/redux/reducers/wrap-slice";
import {Device} from "@/types/Device";

export const useDevice = () => {
    const dispatch = useDispatch();

    const handleResize = () => {
        if(window.innerWidth < 768) {
            dispatch(setIsNavbarHidden(true));
            dispatch(setDevice(Device.Mobile));
            return;
        }
        if(window.innerWidth < 1150) {
            dispatch(setDevice(Device.Tablet));
            return;
        }
        else dispatch(setDevice(Device.Desktop));
    }

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
}