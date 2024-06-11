import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";

type SelectedItemLayoutProps = LayoutProps & {
    isMenuOpened: boolean,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const SelectedItemLayout = (props: SelectedItemLayoutProps) => {
    const {children, setIsMenuOpened, isMenuOpened} = props;

    return (
        <div
            onClick={() => setIsMenuOpened((prev) => !prev)}
            className={`flex justify-between items-center h-13 cursor-pointer text-lg duration-200 ease-out pr-4 
            ${isMenuOpened ? 'bg-neutral-100 rounded-t-md' : 'bg-transparent'}`}>
            {children}
        </div>
    )
}

export default SelectedItemLayout;