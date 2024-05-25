import {LayoutProps} from "@/types/LayoutProps";

const ListInfoLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex text-base text-neutral-700">
            {children}
        </div>
    )
}

export default ListInfoLineLayout;