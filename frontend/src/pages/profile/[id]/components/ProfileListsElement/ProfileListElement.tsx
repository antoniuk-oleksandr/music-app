import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import ProfileListElementLayout from "@/pages/profile/[id]/components/ProfileListsElement/ProfileListElementLayout";
import ProfileListsImage from "@/pages/profile/[id]/components/ProfileListsImage";
import ProfileListsInfo from "@/pages/profile/[id]/components/ProfileListsInfo";
import ProfileListsOverlay from "@/pages/profile/[id]/components/ProfileListsOverlay/ProfileListsOverlay";
import {useRef, useState} from "react";
import {handleProfileAlbumClick} from "@/pages/profile/[id]/handlers";
import {useRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";

type ProfileListElementProps = {
    element: Album | Playlist,
    type: SearchTab,
}

const ProfileListElement = (props: ProfileListElementProps) => {
    const {element, type} = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const router = useRouter();

    if(!element) return null;
    return (
        <ProfileListElementLayout>
            <div
                onClick={(e) => handleProfileAlbumClick(e, buttonRef, router, type, element.id)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={"relative rounded-md overflow-hidden"}>
                <ProfileListsImage src={element.imagePath}/>
                <ProfileListsOverlay
                    buttonRef={buttonRef}
                    element={element}
                    isHovered={isHovered}
                />
            </div>
            <ProfileListsInfo element={element}/>
        </ProfileListElementLayout>
    )
}

export default ProfileListElement;