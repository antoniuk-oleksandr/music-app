import {ProfilePageProps} from "@/types/ProfilePageProps";
import {SearchTab} from "@/types/SearchTab";
import ProfileListElement from "@/pages/profile/[id]/components/ProfileListsElement/ProfileListElement";
import ProfileListsLayout from "@/pages/profile/[id]/components/ProfileLists/ProfileListsLayout";

type ProfileListsProps = ProfilePageProps & {
    listType: SearchTab;
}

const ProfileLists = (props: ProfileListsProps) => {
    const {listType, profileData} = props;
    const lists = profileData[listType.toLowerCase() as 'albums' | 'playlists'];

    return (
        <ProfileListsLayout>
            {lists.map((element, key) => (
                <ProfileListElement key={key} element={element}/>
            ))}
        </ProfileListsLayout>
    )
}

export default ProfileLists;