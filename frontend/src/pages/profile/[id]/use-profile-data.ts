import {useEffect, useState} from "react";
import {profileRequest} from "@/api/profile-request";
import {useRouter} from "next/router";
import {Profile} from "@/types/Profile";
import {getUrlFromString} from "@/utils/utils";
import {FileType} from "@/types/File";

export const useProfileData = () => {
    const [profile, setProfile] = useState<null | Profile>(null);

    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        const getData = async () => {
            const id = Number.parseInt(router.query.id as string);
            const data = await profileRequest(id as number) as Profile;
            data.user.avatarPath = await getUrlFromString(data.user.avatarPath, FileType.Image);
            data.user.bannerPath = await getUrlFromString(data.user.bannerPath, FileType.Image);

            setProfile(data);
        }

        getData();
    }, [router]);

    return profile;
}