import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const SearchLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <Wrapper pt={''} pb={'pb-48'}>
            <div className={""}>
                {children}
            </div>
        </Wrapper>
    )
}

export default SearchLayout;