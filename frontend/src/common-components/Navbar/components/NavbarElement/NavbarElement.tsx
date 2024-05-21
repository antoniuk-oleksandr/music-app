import NavbarElementLayout from "./NavbarElementLayout";
import {ReactNode} from "react";
import NavIconLayout from "@/common-components/Navbar/components/NavIconLayout";
import Selector from "@/common-components/Navbar/components/Selector";

type NavbarElementProps = {
    text: string,
    icon: ReactNode,
    currentPath: string | null,
    pagePath: string
}

const NavbarElement = (props: NavbarElementProps) => {
    const {icon, text, currentPath, pagePath} = props;

    let isSelected = false;
    if(currentPath){
        isSelected = pagePath.toLowerCase() === currentPath.toLowerCase();
    }
    return (
        <NavbarElementLayout pagePath={pagePath}>
            <NavIconLayout isSelected={isSelected}>{icon}</NavIconLayout>
            <span className={"z-10"}>{text}</span>
            <Selector isSelected={isSelected}/>
        </NavbarElementLayout>
    )
}

export default NavbarElement;