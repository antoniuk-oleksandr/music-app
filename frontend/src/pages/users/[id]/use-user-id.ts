'use client'

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

export const useUserId = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {

        if (!params || !params.id || Array.isArray(params)) return;

        setUserId(params.id as string);
    }, [params]);

    return userId;
}