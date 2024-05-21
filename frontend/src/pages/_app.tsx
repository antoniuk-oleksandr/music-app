import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Navbar from "@/common-components/Navbar/Navbar";
import AppLayout from "@/pages/AppLayout";
import MusicPlayer from "@/common-components/MusicPlayer/MusicPlayer";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AppLayout>
            <Navbar/>
            <MusicPlayer/>
            <Component {...pageProps} />
        </AppLayout>
    );
}
