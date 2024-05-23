export const getVolume = () => {
    const volume = localStorage.getItem("volume");

    if (!volume) {
        localStorage.setItem("volume", "1");
        return 1;
    }
    return Number.parseFloat(volume);
}

export const getIsMuted = () => {
    const isMuted = localStorage.getItem("muted");

    if (isMuted === null || isMuted === undefined || isMuted === "") {
        localStorage.setItem("muted", JSON.stringify(false));
        return false;
    }

    return JSON.parse(isMuted);
}