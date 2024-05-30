import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {formatPath} from "@/common-components/Navbar/helpers";

export const usePath = () => {
    const [path, setPath] = useState<null | string>(null)

    const router = useRouter();
    useEffect(() => {
        setPath(formatPath(router.pathname));
    }, [router]);

    return path;
}