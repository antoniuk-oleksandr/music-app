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
            },
            minWidth: {
                67.5: "16.875rem",
            },
            width: {
                67.5: "16.875rem",
                25: "6.25rem",
                96.5: "24.125rem",
                "full-profile-page" : "calc(100% - 270px)"
            },
            height: {
                30: "7.5rem"
            },
            gridTemplateColumns: {
                "playlist-song-row": "repeat(3, minmax(0, calc(5/12 * (100vw - (4 * 1rem))))) minmax(96px, auto) minmax(54px, auto)", // 5/12, 2/12, 5/12, 54px
            },
            colors: {
                "black-70": "rgba(0, 0, 0, 0.7)",
                "white-10": "rgba(255, 255, 255, 0.1)",
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
