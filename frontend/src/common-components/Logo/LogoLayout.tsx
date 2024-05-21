import {LayoutProps} from "@/types/LayoutProps";

const LogoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex items-center text-2xl text-red-500 gap-x-1 font-semibold">
            {children}
        </div>
    )
}

export default LogoLayout;