import {getYearFromTimestamp} from "@/utils/utils";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {useRouter} from "next/router";

type ProfileListsInfoProps = {
    element: Album | Playlist,
}

const ProfileListsInfo = (props: ProfileListsInfoProps) => {
    const {element} = props;
    const router = useRouter();

    return (
        <div>
            <p
                onClick={() => router.push(`/album/${element.id}`)}
                className={"font-semibold hover:underline cursor-pointer w-fit duration-200 ease-out"}
            >{element.name}</p>
            <p className={"text-neutral-700"}>{getYearFromTimestamp(element.creatingDate)}</p>
        </div>
    )
}

export default ProfileListsInfo;