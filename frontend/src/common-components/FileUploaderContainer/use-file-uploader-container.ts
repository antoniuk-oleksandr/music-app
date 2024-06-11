import {Dispatch, MutableRefObject, SetStateAction, useEffect, useState} from "react";

export const useFileUploaderContainer = (
    menuRef: MutableRefObject<HTMLElement | null>,
    menuButtonRef: MutableRefObject<HTMLElement | null>,
    idk: MutableRefObject<null | Dispatch<SetStateAction<boolean>>>,
) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleClick = (e: MouseEvent) => {
        if (!menuRef.current) return;
        if (menuRef.current.contains(e.target as Node)) return;
        if (menuButtonRef.current && menuButtonRef.current.contains(e.target as Node)) return;
        setIsMenuOpened(false);
    }

    useEffect(() => {
        idk.current = setIsMenuOpened;

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return {isMenuOpened, setIsMenuOpened};
}