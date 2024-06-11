import {Dispatch, MutableRefObject} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {UnknownAction} from "redux";
import {profileChangePictureRequest} from "@/api/profile-change-picture-request";
import {capitalize, showDialog} from "@/utils/utils";
import {profileBannerSignal} from "@/pages/profile/[id]/signals/profile-banner-signal";
import {profileAvatarSignal} from "@/common-components/ProfileMenu/profile-avatar-signal";

export const handleProfileUploadClick = async (
    file: MutableRefObject<File | null>,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    type: 'banner' | 'avatar',
) => {
    if (!file.current) return;

    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await updateJwt(tokenInfo, dispatch));
    }

    const status = await profileChangePictureRequest(type, file.current, token);
    if (status === 200) {
        const text = `${capitalize(type)} has been successfully changed!`;
        showDialog(dispatch, text, 'text-green-400');

        getUrlFromFile(file.current, (img) => {
            if (type === 'banner') profileBannerSignal.value = img;
            else profileAvatarSignal.value = img;
        })

    } else {
        const text = `An error occurred while updating the ${capitalize(type)}.`;
        showDialog(dispatch, text, 'text-red-500');
    }
}

const getUrlFromFile = (file: File, setImage: (img: string) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
}