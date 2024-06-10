import {LayoutProps} from "@/types/LayoutProps";

const ChooseSongLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center mt-1"}>
            {children}
        </div>
    )
}

export default ChooseSongLayout;