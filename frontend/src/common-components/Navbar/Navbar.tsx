import NavbarLayout from "./NavbarLayout";
import {IoDisc, IoHome, IoMenu, IoMusicalNote} from "react-icons/io5";
import NavbarElement from "@/common-components/Navbar/components/NavbarElement/NavbarElement";
import LogoContainer from "@/common-components/Navbar/components/LogoContainer";
import PlayListsBlock from "@/common-components/Navbar/components/PlayListsBlock/PlayListsBlock";
import {usePath} from "@/common-components/Navbar/use-effects/use-path";
import NavbarLogoLayout from "@/common-components/Navbar/components/NavbarLogoLayout";
import NavbarHideButton from "@/common-components/Navbar/components/NavbarHideButton";
import {useNavbar} from "@/common-components/Navbar/use-effects/use-navbar";

const Navbar = () => {
    const currentPath = usePath();
    const isNavbarHidden = useNavbar();

    if ([null].includes(isNavbarHidden)) return null;
    return (
        <NavbarLayout isNavbarHidden={isNavbarHidden}>
            {!isNavbarHidden && (
                <NavbarLogoLayout>
                    <NavbarHideButton/>
                    <LogoContainer/>
                </NavbarLogoLayout>
            )}
            <NavbarElement
                pagePath={"/"}
                currentPath={currentPath}
                text={"Home"}
                icon={<IoHome/>}
                isNavbarHidden={isNavbarHidden}
            />
            <NavbarElement
                pagePath={"/discovery"}
                currentPath={currentPath}
                text={"Discovery"}
                icon={<IoDisc/>}
                isNavbarHidden={isNavbarHidden}
            />
            <NavbarElement
                pagePath={"/library"}
                currentPath={currentPath}
                text={"Library"}
                icon={<IoMusicalNote/>}
                isNavbarHidden={isNavbarHidden}
            />
            {!isNavbarHidden && <PlayListsBlock/>}
        </NavbarLayout>
    )
}

export default Navbar;