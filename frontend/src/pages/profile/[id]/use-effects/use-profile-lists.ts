import {useEffect, useState} from "react";
import {profileListsRequest} from "@/api/profile-lists-request";
import {useRouter} from "next/router";
import {useParams} from "next/navigation";
import {SearchTab} from "@/types/SearchTab";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {getImagesForList} from "@/utils/utils";

export const useProfileLists = (type: SearchTab) => {
    const [list, setList] = useState<null | Album[] | Playlist[]>(null);
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        if (!router.isReady) return;
        const id = parseInt(params.id as string);

        const getData = async () => {
            const loweredType = type.toLowerCase();
            const response = await profileListsRequest(id, type, 30, 0);
            const data = response[loweredType];
            await getImagesForList(data);
            setList(response[loweredType]);
        }

        getData();
    }, [router]);

    return list;
}