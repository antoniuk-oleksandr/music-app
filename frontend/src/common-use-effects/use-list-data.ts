import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Album} from "@/types/Album";
import {getSongImagesForList} from "@/utils/utils";
import {listRequest} from "@/api/list-request";
import {ListType} from "@/types/ListType";
import {Playlist} from "@/types/Playlist";

export const useListData = (listType: ListType) => {
    const [listData, setListData] = useState<Album | Playlist | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady || !router.query) return;

        const getList = async () => {
            const query = router.query as { [key: string]: string };
            const id = parseInt(query.id);

            const response = await listRequest(id, listType) as Playlist | Album;
            await getSongImagesForList(response);

            setListData(response);
        }

        getList();
    }, [router]);

    return listData;
}