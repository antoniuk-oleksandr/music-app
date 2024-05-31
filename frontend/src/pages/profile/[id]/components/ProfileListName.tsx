import {useRouter} from "next/router";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

type ProfileListNameProps = {
    element: Album | Playlist,
}

const ProfileListName = (props: ProfileListNameProps) => {
    const {element} = props;
    const router = useRouter();

    return (
        <p
            onClick={() => router.push(`/album/${element.id}`)}
            className={"font-semibold hover:underline cursor-pointer w-fit duration-200 ease-out line-clamp-2"}
        >{element.name}</p>
    )
}

export default ProfileListName;