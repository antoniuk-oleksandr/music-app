import {LayoutProps} from "@/types/LayoutProps";

type ProgressbarLayoutProps = LayoutProps & {
    width: string
}

const ProgressbarLayout = (props: ProgressbarLayoutProps) => {
    const {children, width} = props;

    return (
        <div className={`h-1 relative ${width}`}>
            {children}
        </div>
    )
}

export default ProgressbarLayout;