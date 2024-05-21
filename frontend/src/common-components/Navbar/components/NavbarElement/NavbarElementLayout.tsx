import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/navigation";

type NavbarElementLayoutProps = LayoutProps & {
    pagePath: string;
}

const NavbarLayout = (props: NavbarElementLayoutProps) => {
    const {children, pagePath} = props;
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(pagePath)}
            className={"flex items-center px-4 py-3 gap-4 font-semibold text-base cursor-pointer relative"}>
            {children}
        </div>
    )
}

export default NavbarLayout;