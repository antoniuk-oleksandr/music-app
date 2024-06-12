import {useEffect} from "react";

function preventDefault(e: Event) {
    e.preventDefault();
}

export const useMenu = () => {
    useEffect(() => {
        window.addEventListener('scroll', preventDefault, {passive: false});
        window.addEventListener('wheel', preventDefault, {passive: false});
        window.addEventListener('touchmove', preventDefault, {passive: false});

        return () => {
            window.removeEventListener('scroll', preventDefault);
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        }
    }, []);
}