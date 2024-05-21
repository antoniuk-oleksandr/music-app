import {LayoutProps} from "@/types/LayoutProps";

const UserPageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={""}>
            {children}
        </div>
    )
}

export default UserPageLayout;