import Wrapper from "@/common-components/Wrapper/Wrapper";
import {ProfilePageProps} from "@/types/ProfilePageProps";
import ProfileSongs from "@/pages/profile/[id]/components/ProfileSongs";
import ProfileListsContainer from "@/pages/profile/[id]/components/ProfileListsContainer";
import {SearchTab} from "@/types/SearchTab";
import ProfileUserDataLayout from "@/pages/profile/[id]/components/ProfileUserData/ProfileUserDataLayout";

const ProfileUserData = (props: ProfilePageProps) => {
    return (
        <Wrapper pt={'pt-8'} pb={'pb-8'}>
            <ProfileUserDataLayout>
                <ProfileSongs {...props}/>
                <ProfileListsContainer listType={SearchTab.Albums} {...props}/>
                <ProfileListsContainer listType={SearchTab.Playlists} {...props}/>
            </ProfileUserDataLayout>
        </Wrapper>
    )
}

export default ProfileUserData;