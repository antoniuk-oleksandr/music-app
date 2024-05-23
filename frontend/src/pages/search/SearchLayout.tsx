import {LayoutProps} from "@/types/LayoutProps";
import PageWrapper from "@/common-components/PageWrapper";

const SearchLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <PageWrapper pt={''} pb={'pb-48'}>
            <div className={""}>
                {children}
            </div>
        </PageWrapper>
    )
}

export default SearchLayout;