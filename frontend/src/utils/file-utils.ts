export const getSongDuration = (file: File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            const audio = new Audio();
            audio.src = (event.target && event.target.result) as string;

            audio.onloadedmetadata = function () {
                resolve(Math.floor(audio.duration));
            };

            audio.onerror = function (error) {
                reject(error);
            };
        };

        reader.readAsDataURL(file);
    });
}
