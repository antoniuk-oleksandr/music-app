import {LayoutProps} from "@/types/LayoutProps";

type BackBarLayoutProps = LayoutProps & {
    rounded: boolean
}

const BackBarLayout = (props: BackBarLayoutProps) => {
    const {children, rounded} = props;

    return (
        <div className={`w-full h-1 bg-neutral-200 relative ${rounded ? 'rounded-full' : ''}`}>
            {children}
        </div>
    )
}

export default BackBarLayout;