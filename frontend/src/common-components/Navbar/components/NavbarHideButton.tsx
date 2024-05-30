import {IoMenu} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {changeIsNavbarHidden} from "@/redux/reducers/wrap-slice";

const NavbarHideButton = () => {
    const dispatch = useDispatch();

    return (
        <>
            <IoMenu
                onClick={() => dispatch(changeIsNavbarHidden())}
            />
        </>
    )
}

export default NavbarHideButton;