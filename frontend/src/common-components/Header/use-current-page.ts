import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const useCurrentPage = () => {
    const [currentPage, setCurrentPage] = useState<null | string>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        setCurrentPage(router.route);
    }, [router]);

    return currentPage;
}