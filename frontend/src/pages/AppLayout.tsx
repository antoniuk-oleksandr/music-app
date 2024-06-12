import {LayoutProps} from "@/types/LayoutProps";
import {Manrope} from "next/font/google";
import {Provider} from "react-redux";
import store from "@/redux/stores/store";
import {AudioProvider} from "@/common-components/AudioContext";
import Navbar from "@/common-components/Navbar/Navbar";
import MusicPlayer from "@/common-components/MusicPlayer/MusicPlayer";
import Dialog from "@/common-components/Dialog/Dialog";
import TokenHandler from "@/TokenHandler";
import ModalElement from "@/common-components/ModalElement/ModalElement";
import Modals from "../modals/Modal/Modals";
import Menus from "@/menus/Menus";

const inter = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

type AppLayoutProps = LayoutProps & {
    hideNavbarHeader: boolean
}

const AppLayout = (props: AppLayoutProps) => {
    const {children, hideNavbarHeader} = props;

    return (
        <AudioProvider font={inter.className}>
            <Provider store={store}>
                <Modals/>
                <Menus/>
                <Dialog/>
                <TokenHandler/>
                <MusicPlayer/>
                <div className={`flex ${inter.className}`}>
                    {!hideNavbarHeader && <Navbar/>}
                    <div className={`w-full flex flex-col`}>
                        {children}
                    </div>
                </div>
            </Provider>
        </AudioProvider>
    )
}

export default AppLayout;