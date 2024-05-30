import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import ProfileListElementLayout from "@/pages/profile/[id]/components/ProfileListsElement/ProfileListElementLayout";
import ProfileListsImage from "@/pages/profile/[id]/components/ProfileListsImage";
import ProfileListsInfo from "@/pages/profile/[id]/components/ProfileListsInfo";
import ProfileListsOverlay from "@/pages/profile/[id]/components/ProfileListsOverlay/ProfileListsOverlay";
import {useState} from "react";

type ProfileListElementProps = {
    element: Album | Playlist,
}

const ProfileListElement = (props: ProfileListElementProps) => {
    const {element} = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <ProfileListElementLayout>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={"relative rounded-md overflow-hidden"}>
                <ProfileListsImage src={element.imagePath}/>
                <ProfileListsOverlay element={element} isHovered={isHovered}/>
            </div>
            <ProfileListsInfo element={element}/>
        </ProfileListElementLayout>
    )
}

export default ProfileListElement;