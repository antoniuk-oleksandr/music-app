import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                'smooth-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.6) 75%, rgba(245, 245, 245) 100%)',
                'black-gradient': 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.4) 100%)',
            },
            minWidth: {
                67.5: "16.875rem",
            },
            width: {
                67.5: "16.875rem",
                25: "6.25rem",
                96.5: "24.125rem",
                "full-profile-page" : "calc(100% - 270px)",
                225: "56.25rem",
                288: "72rem",
                140: "35rem",
            },
            height: {
                30: "7.5rem",
                13: "3.25rem",
            },
            margin:{
                13: "3.25rem",

            },
            gridTemplateColumns: {
                "playlist-song-row": "repeat(3, minmax(0, calc(5/12 * (100vw - (4 * 1rem))))) minmax(96px, auto) minmax(54px, auto)",
            },
            colors: {
                "black-70": "rgba(0, 0, 0, 0.7)",
                "black-40": "rgba(0, 0, 0, 0.4)",
                "white-10": "rgba(255, 255, 255, 0.1)",
            },
            screens: {
                'mobile': {max: '768px'},
                'small': {min: '480px', max: '960px'},
                'tablet': {min: '960', max: '1440px'},
                'laptop': {min: '1440px', max: '1920px'},
                'desktop': {min: '1920px'}, // 10k to 1920px
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
