import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import type {AppProps} from "next/app";
import AppLayout from "@/pages/AppLayout";
import Header from "@/common-components/Header/Header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AppLayout>
            <Header/>
            <Component {...pageProps} />
        </AppLayout>
    );
}
