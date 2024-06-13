import NavbarPlaylistButtonLayout
    from "@/common-components/Navbar/components/NavbarPlaylistButton/NavbarPlaylistButtonLayout";
import {IoPlay} from "react-icons/io5";
import ProfileListsPlayButtonLayout
    from "@/pages/profile/[id]/components/ProfileListsPlayButton/ProfileListsPlayButtonLayout";
import {Song} from "@/types/Song";

type NavbarPlaylistButtonProps = {
    songs: Song[],
    isHovered: boolean,
}

const NavbarPlaylistButton = (props: NavbarPlaylistButtonProps) => {
    const {songs} = props;

    return (
        <NavbarPlaylistButtonLayout {...props}>
            <ProfileListsPlayButtonLayout
                className={"!size-6 !m-0"}
                songs={songs}>
                <IoPlay className={"text-base text-white"}/>
            </ProfileListsPlayButtonLayout>
        </NavbarPlaylistButtonLayout>
    )
}

export default NavbarPlaylistButton;