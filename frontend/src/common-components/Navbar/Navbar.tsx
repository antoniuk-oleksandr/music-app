import NavbarLayout from "./NavbarLayout";
import {IoDisc, IoHome, IoMusicalNote} from "react-icons/io5";
import NavbarElement from "@/common-components/Navbar/components/NavbarElement/NavbarElement";
import LogoContainer from "@/common-components/Navbar/components/LogoContainer";
import PlayListsBlock from "@/common-components/Navbar/components/PlayListsBlock/PlayListsBlock";
import {usePath} from "@/common-components/Navbar/use-path";

const Navbar = () => {
    const currentPath = usePath();

    return (
        <NavbarLayout>
            <LogoContainer/>
            <NavbarElement
                pagePath={"/"}
                currentPath={currentPath}
                text={"Home"}
                icon={<IoHome/>}/>
            <NavbarElement
                pagePath={"/discovery"}
                currentPath={currentPath}
                text={"Discovery"}
                icon={<IoDisc/>}/>
            <NavbarElement
                pagePath={"/library"}
                currentPath={currentPath}
                text={"Library"}
                icon={<IoMusicalNote/>}/>
            <PlayListsBlock/>
        </NavbarLayout>
    )
}

export default Navbar;