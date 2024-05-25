import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Album} from "@/types/Album";
import {getAlbumData} from "@/pages/album/[id]/album-data";
import {getImagesForList, getUrlFromString} from "@/utils/utils";

export const useAlbumData = () => {
    const [albumData, setAlbumData] = useState<Album | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady || !router.query) return;

        const idk = async () => {
            const query = router.query as { [key: string]: string };
            const id = query.id;

            const response = getAlbumData() as Album;
            await getImagesForList(response);

            setAlbumData(response);
        }

        idk();
    }, [router]);

    return albumData;
}