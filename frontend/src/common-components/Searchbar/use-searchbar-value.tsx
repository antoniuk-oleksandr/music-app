import {useEffect, useState} from "react";
import {useRouter as useQueryRouter} from "next/router";

export const useSearchbarValue = () => {
    const [value, setValue] = useState<string | null>(null);

    const queryRouter = useQueryRouter();
    useEffect(() => {
        if(!queryRouter.isReady) return;

        if(Object.keys(queryRouter.query).length === 0) {
            setValue("");
            return;
        }

        if (!queryRouter.query || Array.isArray(queryRouter.query)) return;
        setValue(queryRouter.query.q as string);
    }, [queryRouter])

    return value;
}