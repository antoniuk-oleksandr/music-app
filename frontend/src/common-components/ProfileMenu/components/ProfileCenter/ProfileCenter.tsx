import ProfileBottomLayout from "./ProfileCenterLayout";
import ProfileMenuItem from "@/common-components/ProfileMenu/components/ProfileMenuItem/ProfileMenuItem";
import {useRouter} from "next/router";
import {User} from "@/types/User";
import {GoPerson, GoSignOut} from "react-icons/go";
import {Dispatch, SetStateAction} from "react";
import {useDispatch} from "react-redux";
import { handleSignOutButtonClick } from "@/common-components/Header/handlers";

type ProfileBottomProps = {
    user: User,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const ProfileCenter = (props: ProfileBottomProps) => {
    const {setIsMenuOpened, user} = props;
    const {id} = user;
    const router = useRouter();
    const dispatch = useDispatch();


    return (
        <ProfileBottomLayout>
            <ProfileMenuItem
                setIsMenuOpened={setIsMenuOpened}
                text={"Your profile"}
                icon={<GoPerson />}
                onClick={() => router.push(`/profile/${id}`)}
            />
            <ProfileMenuItem
                setIsMenuOpened={setIsMenuOpened}
                icon={<GoSignOut />}
                text={'Sign out'}
                onClick={() => handleSignOutButtonClick(dispatch)}
            />
        </ProfileBottomLayout>
    )
}

export default ProfileCenter;