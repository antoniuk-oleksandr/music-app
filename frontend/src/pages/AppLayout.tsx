import {LayoutProps} from "@/types/LayoutProps";
import {Manrope} from "next/font/google";

const inter = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

const AppLayout = (props: LayoutProps) => {
    const {children} = props;


    return (
        <div className={`flex ${inter.className}`}>
            {children}
        </div>
    )
}

export default AppLayout;