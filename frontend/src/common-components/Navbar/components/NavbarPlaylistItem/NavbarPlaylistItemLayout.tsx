import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";
import {handleNavbarPlaylistClick} from "@/common-components/Navbar/handlers";

type NavbarPlaylistItemLayoutProps = LayoutProps & {
    id: number,
}

const NavbarPlaylistItemLayout = (props: NavbarPlaylistItemLayoutProps) => {
    const {children, id} = props;

    const router = useRouter();

    return (
        <div
            onClick={(e) => handleNavbarPlaylistClick(e, id, router)}
            className={"py-2 text-sm px-4 rounded-md flex flex-col hover:bg-neutral-200 cursor-pointer"}>
            {children}
        </div>
    )
}

export default NavbarPlaylistItemLayout;