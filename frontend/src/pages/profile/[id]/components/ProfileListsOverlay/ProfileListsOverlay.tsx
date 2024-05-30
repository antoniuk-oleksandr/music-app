import {IoPlay} from "react-icons/io5";
import ProfileListsOverlayLayout from "@/pages/profile/[id]/components/ProfileListsOverlay/ProfileListsOverlayLayout";
import ProfileListsPlayButtonLayout
    from "@/pages/profile/[id]/components/ProfileListsPlayButton/ProfileListsPlayButtonLayout";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {AnimatePresence} from "framer-motion";
import ProfileListsContentOverlay from "@/pages/profile/[id]/components/ProfileListsContentOverlay";

type ProfileListsOverlayProps = {
    element: Album | Playlist,
    isHovered: boolean,
}

const ProfileListsOverlay = (props: ProfileListsOverlayProps) => {
    const {element, isHovered} = props;

    return (
        <AnimatePresence>
            {isHovered && (
                <>
                    <ProfileListsContentOverlay/>
                    <ProfileListsOverlayLayout>
                        <ProfileListsPlayButtonLayout>
                            <IoPlay className={"text-2xl text-white"}/>
                        </ProfileListsPlayButtonLayout>
                    </ProfileListsOverlayLayout>
                </>
            )}
        </AnimatePresence>
    )
}

export default ProfileListsOverlay;