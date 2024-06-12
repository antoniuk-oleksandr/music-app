import NavbarPlaylistItemLayout from "./NavbarPlaylistItemLayout";
import {Playlist} from "@/types/Playlist";
import NavbarPlaylistCreator from "@/common-components/Navbar/components/NavbarPlaylistCreator";
import NavbarPlaylistName from "@/common-components/Navbar/components/NavbarPlaylistName";

type NavbarPlaylistItemProps = Playlist;

const NavbarPlaylistItem = (props: NavbarPlaylistItemProps) => {
    const {name, creator, id} = props;

    return (
        <NavbarPlaylistItemLayout id={id}>
            <NavbarPlaylistName name={name}/>
            <NavbarPlaylistCreator creator={creator} />
        </NavbarPlaylistItemLayout>
    )
}

export default NavbarPlaylistItem;