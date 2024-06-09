import {LayoutProps} from "@/types/LayoutProps";

const FileUploaderHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-between text-lg px-4 pt-4 w-full">
            {children}
        </div>
    )
}

export default FileUploaderHeaderLayout;