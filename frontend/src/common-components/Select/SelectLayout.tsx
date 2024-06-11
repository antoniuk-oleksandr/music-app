import {LayoutProps} from "@/types/LayoutProps";

type SelectLayoutProps = LayoutProps & {
    menuWidth: string,
}

const SelectLayout = (props: SelectLayoutProps) => {
    const {children, menuWidth} = props;

    return (
        <div className={`relative text-sm flex flex-col justify-center ${menuWidth}`}>
            {children}
        </div>
    )
}

export default SelectLayout;