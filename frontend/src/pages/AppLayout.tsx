import {LayoutProps} from "@/types/LayoutProps";
import {Manrope} from "next/font/google";
import {Provider} from "react-redux";
import store from "@/redux/stores/store";
import {AudioProvider} from "@/utils/AudioContext";

const inter = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

const AppLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <AudioProvider>
            <Provider store={store}>
                <div className={`flex ${inter.className}`}>
                    {children}
                </div>
            </Provider>
        </AudioProvider>
    )
}

export default AppLayout;