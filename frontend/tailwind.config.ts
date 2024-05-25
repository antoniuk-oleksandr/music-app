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
            },
            minWidth: {
                67.5: "16.875rem",
            },
            width: {
                67.5: "16.875rem",
                25: "6.25rem",
                96.5: "24.125rem",
            },
            height: {
                30: "7.5rem"
            },
            gridTemplateColumns: {
                "playlist-song-row": "repeat(3, minmax(0, calc(5/12 * (100vw - (4 * 1rem))))) minmax(96px, auto) minmax(54px, auto)", // 5/12, 2/12, 5/12, 54px
            },
            colors: {
                "black-70": "rgba(0, 0, 0, 0.7)"
            }
        },
    },
    plugins: [],
};
export default config;
