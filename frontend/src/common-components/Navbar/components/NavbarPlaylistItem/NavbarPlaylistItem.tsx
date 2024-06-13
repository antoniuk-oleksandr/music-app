import NavbarPlaylistItemLayout from "./NavbarPlaylistItemLayout";
import {Playlist} from "@/types/Playlist";
import NavbarPlaylistCreator from "@/common-components/Navbar/components/NavbarPlaylistCreator";
import NavbarPlaylistName from "@/common-components/Navbar/components/NavbarPlaylistName";
import {useState} from "react";
import NavbarPlaylistButton from "../NavbarPlaylistButton/NavbarPlaylistButton";

type NavbarPlaylistItemProps = Playlist;

const NavbarPlaylistItem = (props: NavbarPlaylistItemProps) => {
    const {name, creator, id} = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <NavbarPlaylistItemLayout setIsHovered={setIsHovered} id={id}>
            <NavbarPlaylistName name={name}/>
            <NavbarPlaylistCreator creator={creator}/>
            <NavbarPlaylistButton {...props} isHovered={isHovered}/>
        </NavbarPlaylistItemLayout>
    )
}

export default NavbarPlaylistItem;