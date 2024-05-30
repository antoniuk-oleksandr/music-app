import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import type {AppProps} from "next/app";
import AppLayout from "@/pages/AppLayout";
import Header from "@/common-components/Header/Header";
import DeviceProvider from "@/common-components/DeviceProvider";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AppLayout>
            <DeviceProvider>
                <Header/>
                <Component {...pageProps} />
            </DeviceProvider>
        </AppLayout>
    );
}
