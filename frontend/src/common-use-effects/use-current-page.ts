import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const useCurrentPage = () => {
    const [hideNavbarHeader, setHideNavbarHeader] = useState<null | boolean>(null);
    const pagesToHide = ['sign-in', 'sign-up'];
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        let route = router.route;
        route = route.slice(1, route.length);
        setHideNavbarHeader(pagesToHide.includes(route));
    }, [router])

    return hideNavbarHeader;
}