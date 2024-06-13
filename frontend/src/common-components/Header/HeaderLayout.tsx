import {LayoutProps} from "@/types/LayoutProps";
import {useScrollbar} from "@/common-components/Header/use-scrollbar";
import {useCurrentPage} from "@/common-components/Header/use-current-page";
import Wrapper from "@/common-components/Wrapper/Wrapper";

const HeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    const topOffset = useScrollbar();
    const currentPage = useCurrentPage();

    if (!currentPage) return null;
    return (
        <div
            style={{width:'100%'}}
            className={`h-16 flex items-center justify-between  z-10
            ${topOffset > 0 ? 'bg-white' : 'bg-transparent'}
            ${currentPage === '/profile/[id]' ? 'fixed top-0 left-0' : 'sticky top-0'}`}>
            <Wrapper pt={''} pb={''} isHeader>
                <div className="flex w-full justify-between items-center">
                    {children}
                </div>
            </Wrapper>
        </div>
    )
}

export default HeaderLayout;