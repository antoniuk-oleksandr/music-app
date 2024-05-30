import LeftSideLayout from "./LeftSideLayout";
import Searchbar from "@/common-components/Searchbar/Searchbar";
import NavbarHideButton from "@/common-components/Navbar/components/NavbarHideButton";
import LogoContainer from "@/common-components/Navbar/components/LogoContainer";
import NavbarLogoLayout from "@/common-components/Navbar/components/NavbarLogoLayout";
import {useSelector} from "react-redux";

const LeftSide = () => {
    const {isNavbarHidden} = useSelector((state: any) => state.wrapper);

    return (
        <LeftSideLayout>
            {isNavbarHidden && (
                <NavbarLogoLayout>
                    <NavbarHideButton/>
                    <LogoContainer/>
                </NavbarLogoLayout>
            )}
            <Searchbar/>
        </LeftSideLayout>
    )
}

export default LeftSide;