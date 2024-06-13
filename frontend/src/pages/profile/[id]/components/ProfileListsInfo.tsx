import {getYearFromTimestamp} from "@/utils/utils";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {useRouter} from "next/router";
import ProfileListName from "@/pages/profile/[id]/components/ProfileListName";
import YearElement from "@/common-components/YearElement";
import {SearchTab} from "@/types/SearchTab";

type ProfileListsInfoProps = {
    element: Album | Playlist,
    type: SearchTab,
}

const ProfileListsInfo = (props: ProfileListsInfoProps) => {
    const {element} = props;

    return (
        <div>
            <ProfileListName {...props} />
            <YearElement timestamp={element.creatingDate}/>
        </div>
    )
}

export default ProfileListsInfo;