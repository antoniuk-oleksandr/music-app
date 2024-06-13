import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";
import {handleNavbarPlaylistClick} from "@/common-components/Navbar/handlers";
import {Dispatch, SetStateAction} from "react";

type NavbarPlaylistItemLayoutProps = LayoutProps & {
    id: number,
    setIsHovered: Dispatch<SetStateAction<boolean>>;
}

const NavbarPlaylistItemLayout = (props: NavbarPlaylistItemLayoutProps) => {
    const {children, id, setIsHovered} = props;

    const router = useRouter();

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => handleNavbarPlaylistClick(e, id, router)}
            className={"py-2 text-sm px-4 rounded-md flex flex-col hover:bg-neutral-200 cursor-pointer relative"}>
            {children}
        </div>
    )
}

export default NavbarPlaylistItemLayout;