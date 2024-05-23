import {LayoutProps} from "@/types/LayoutProps";
import {Manrope} from "next/font/google";
import {Provider} from "react-redux";
import store from "@/redux/stores/store";
import {AudioProvider} from "@/common-components/AudioContext";
import Navbar from "@/common-components/Navbar/Navbar";
import MusicPlayer from "@/common-components/MusicPlayer/MusicPlayer";

const inter = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

const AppLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <AudioProvider>
            <Provider store={store}>
                <MusicPlayer/>
                <div className={`flex ${inter.className}`}>
                    <Navbar/>
                    <div className={`w-full flex flex-col`}>
                        {children}
                    </div>
                </div>
            </Provider>
        </AudioProvider>
    )
}

export default AppLayout;