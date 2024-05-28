import {LayoutProps} from "@/types/LayoutProps";
import {useScrollbar} from "@/common-components/Header/use-scrollbar";
import {useCurrentPage} from "@/common-components/Header/use-current-page";
import Wrapper from "@/common-components/Wrapper";

const HeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    const topOffset = useScrollbar();
    const currentPage = useCurrentPage();

    if (!currentPage) return null;
    return (
        <div
            className={`h-16 flex items-center justify-between  z-10
            ${topOffset > 0 ? 'bg-white' : 'bg-transparent'}
            ${currentPage === '/profile/[id]' ? 'fixed w-full-profile-page' : 'sticky top-0 w-full'}`}>
            <Wrapper pt={''} pb={''}>
                <div className="flex w-full justify-between items-center">
                    {children}
                </div>
            </Wrapper>
        </div>
    )
}

export default HeaderLayout;