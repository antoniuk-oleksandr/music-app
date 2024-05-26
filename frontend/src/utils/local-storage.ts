import {Repeat} from "@/types/Repeat";

export const getVolumeFromLocalStorage = () => {
    const volume = localStorage.getItem("volume");

    if (!volume) {
        localStorage.setItem("volume", "1");
        return 1;
    }
    return Number.parseFloat(volume);
}

export const getIsMutedFromLocalStorage = () => {
    const isMuted = localStorage.getItem("muted");

    if (isMuted === null || isMuted === undefined || isMuted === "") {
        localStorage.setItem("muted", JSON.stringify(false));
        return false;
    }

    return JSON.parse(isMuted);
}

export const getRepeatFromLocalStorage = (): Repeat => {
    const repeat = localStorage.getItem("repeat");

    if (!repeat) {
        localStorage.setItem("repeat", JSON.stringify(Repeat.None));
        return Repeat.None;
    }

    return JSON.parse(repeat) as Repeat;
}