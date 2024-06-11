export const getSongDuration = (file: File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            const audio = new Audio();
            audio.src = (event.target && event.target.result) as string;

            audio.onloadedmetadata = function () {
                if (!isNaN(audio.duration) && audio.duration !== Infinity) {
                    resolve(Math.floor(audio.duration));
                }
            };

            audio.onerror = function (error) {
                reject(new Error('Error loading audio file'));
            };

            setTimeout(() => {
                if (!isNaN(audio.duration) && audio.duration !== Infinity) {
                    resolve(Math.floor(audio.duration));
                } else {
                    reject(new Error('Unable to retrieve duration'));
                }
            }, 2000);
        };

        reader.onerror = function () {
            reject(new Error('Error reading file'));
        };

        reader.readAsDataURL(file);
    });
};
