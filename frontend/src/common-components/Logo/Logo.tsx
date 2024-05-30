import LogoLayout from "./LogoLayout";
import {IoMusicalNotes} from "react-icons/io5";

const Logo = () => {
    return (
        <LogoLayout>
            <div className="leading-6">
                <p>Music</p>
                {/*<p>Tunes</p>*/}
            </div>
            <IoMusicalNotes className="text-xl"/>
        </LogoLayout>
    )
}

export default Logo;