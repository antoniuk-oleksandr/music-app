import {LayoutProps} from "@/types/LayoutProps";

const AddMusicModalHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-between text-lg px-6 pt-6 items-center">
            {children}
        </div>
    )
}

export default AddMusicModalHeaderLayout;