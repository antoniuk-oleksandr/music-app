import {LayoutProps} from "@/types/LayoutProps";

const IndicatorsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex gap-x-6 basis-1/3 items-center justify-end">
            {children}
        </div>
    )
}

export default IndicatorsLayout;