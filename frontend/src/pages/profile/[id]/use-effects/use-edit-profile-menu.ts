import {useEffect, useState} from "react";

export const useEditProfileMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {

    }, []);

    return {isMenuOpened, setIsMenuOpened}
}