import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const usePlaylistData = () => {
    const [playListData, setPlayListData] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady || router.query) return;

        const query = router.query as { [key: string]: string };
        const id = query.id;
        setPlayListData(Number.parseInt(query.id));
    }, [router]);

    return playListData;
}