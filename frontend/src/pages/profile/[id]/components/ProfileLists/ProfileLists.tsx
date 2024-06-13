import {ProfilePageProps} from "@/types/ProfilePageProps";
import {SearchTab} from "@/types/SearchTab";
import ProfileListElement from "@/pages/profile/[id]/components/ProfileListsElement/ProfileListElement";
import ProfileListsLayout from "@/pages/profile/[id]/components/ProfileLists/ProfileListsLayout";

type ProfileListsProps = ProfilePageProps & {
    listType: SearchTab;
}

const ProfileLists = (props: ProfileListsProps) => {
    const {listType, profileData} = props;
    const lists = profileData[listType.toLowerCase() as 'albums' | 'playlists'].slice(0, 6);

    return (
        <ProfileListsLayout>
            {lists.map((element, key) => (
                <ProfileListElement
                    type={listType}
                    key={key}
                    element={element}
                />
            ))}
        </ProfileListsLayout>
    )
}

export default ProfileLists;