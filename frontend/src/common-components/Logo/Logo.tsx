import LogoLayout from "./LogoLayout";
import {IoMusicalNotes} from "react-icons/io5";

const Logo = () => {
    return (
        <LogoLayout>
            <IoMusicalNotes className="text-3xl"/>
            <span>MusicTunes</span>
        </LogoLayout>
    )
}

export default Logo;