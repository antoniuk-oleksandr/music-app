import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import type {AppProps} from "next/app";
import AppLayout from "@/pages/AppLayout";
import Header from "@/common-components/Header/Header";
import DeviceProvider from "@/common-components/DeviceProvider";
import {useCurrentPage} from "@/common-use-effects/use-current-page";

export default function App({Component, pageProps}: AppProps) {
    const hideNavbarHeader = useCurrentPage();

    if ([hideNavbarHeader].some((v) => v === null)) return null;
    return (
        <AppLayout hideNavbarHeader={hideNavbarHeader as boolean}>
            <DeviceProvider>
                {!hideNavbarHeader && <Header/>}
                <Component {...pageProps} />
            </DeviceProvider>
        </AppLayout>
    );
}
