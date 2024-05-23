import {useEffect, useState} from "react";

export const useScrollbar = () => {
    const [topOffset, setTopOffset] = useState(0);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            if (!document.scrollingElement) return;
            setTopOffset(document.scrollingElement.scrollTop)
        };

        document.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    return topOffset;
}