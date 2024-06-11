import {Dispatch, MutableRefObject, SetStateAction, useEffect, useState} from "react";

export const useMenu = (
    menuRef: MutableRefObject<HTMLElement | null>,
    menuButtonRef: MutableRefObject<HTMLElement | null>,
    setRef?: MutableRefObject<Dispatch<SetStateAction<boolean>> | null>
) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleClick = (e: MouseEvent) => {
        if (!menuRef.current || !menuButtonRef.current) return;
        if (menuRef.current.contains(e.target as Node)) return;
        if (menuButtonRef.current.contains(e.target as Node)) return;
        setIsMenuOpened(false);
    }

    useEffect(() => {
        if (setRef !== undefined) setRef.current = setIsMenuOpened;

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return {isMenuOpened, setIsMenuOpened};
}