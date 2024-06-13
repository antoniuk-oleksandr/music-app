import {useRouter} from "next/router";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {SearchTab} from "@/types/SearchTab";

type ProfileListNameProps = {
    element: Album | Playlist,
    type: SearchTab,
}

const ProfileListName = (props: ProfileListNameProps) => {
    const {element, type} = props;
    const part = type === SearchTab.Playlists ? 'playlist' : 'album';
    const router = useRouter();

    return (
        <p
            onClick={() => router.push(`/${part}/${element.id}`)}
            className={"font-semibold hover:underline cursor-pointer duration-200 ease-out truncate"}
        >{element.name}</p>
    )
}

export default ProfileListName;