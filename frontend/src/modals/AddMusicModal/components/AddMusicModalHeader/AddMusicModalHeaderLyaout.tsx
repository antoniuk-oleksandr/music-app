import {LayoutProps} from "@/types/LayoutProps";

const AddMusicModalHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-between text-lg m-4">
            {children}
        </div>
    )
}

export default AddMusicModalHeaderLayout;