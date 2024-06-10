import {Dispatch, useEffect, useState} from "react";
import {User} from "@/types/User";
import {effect} from "@preact/signals-react";
import {profileAvatarSignal} from "@/common-components/ProfileMenu/profile-avatar-signal";
import {userProfileRequest} from "@/api/user-profile-request";
import {formatImageUrl} from "@/utils/utils";
import {UnknownAction} from "redux";
import {setUserProfile} from "@/redux/reducers/user-profile-slice";

export const useUserProfileData = (jwt: string, dispatch: Dispatch<UnknownAction>) => {
    const [userProfileData, setUserProfileData] = useState<null | User>(null);

    useEffect(() => {
        const getData = async () => {
            let data = await userProfileRequest(jwt) as User;
            data.avatarPath = formatImageUrl(data.avatarPath);
            setUserProfileData(data);
            dispatch(setUserProfile(data));
        }

        getData();

        effect(() => {
            setUserProfileData((prev) => {
                const avatarPath = profileAvatarSignal.value;
                if (!prev) return prev;
                return {
                    ...prev,
                    avatarPath
                }
            });
        });
    }, []);

    return userProfileData;
}