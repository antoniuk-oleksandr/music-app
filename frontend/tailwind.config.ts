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
            colors: {

            }
        },
    },
    plugins: [],
};
export default config;
