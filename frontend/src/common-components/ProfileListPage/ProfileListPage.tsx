import {useProfileLists} from "@/pages/profile/[id]/use-effects/use-profile-lists";
import {SearchTab} from "@/types/SearchTab";
import Wrapper from "@/common-components/Wrapper/Wrapper";
import ProfileListsHeader from "@/pages/profile/[id]/components/ProfileListsHeader";
import ProfileListElement from "@/pages/profile/[id]/components/ProfileListsElement/ProfileListElement";
import ProfileListPageListsLayout from "@/common-components/ProfileListPage/ProfileListPageListsLayout";

type ProfileListPageProps = {
    type: SearchTab;
}

const ProfileListPage = (props: ProfileListPageProps) => {
    const {type} = props;
    const list = useProfileLists(type);

    if(!list) return null;
    return (
        <Wrapper pt={'pt-4'} pb={'pb-48'}>
            <ProfileListsHeader type={type}/>
            <ProfileListPageListsLayout>
                {list.map((element, key) => (
                    <ProfileListElement
                        type={type}
                        key={key}
                        element={element}
                    />
                ))}
            </ProfileListPageListsLayout>
        </Wrapper>
    )
}

export default ProfileListPage;