import {ReactNode} from "react";

type ListSecondButtonProps = {
    action: () => void,
    text: string,
    icon: ReactNode,
}

const ListSecondButton = (props: ListSecondButtonProps) => {
    const {action, text, icon} = props;

    return (
        <button
            onClick={action}
            className={"font-medium flex gap-x-1.5 ring-1 ring-neutral-300 hover:bg-neutral-200 items-center py-1.5 bg-transparent rounded-full px-4  focus:outline-0 active:scale-95"}
            type="button"
        >
            {icon}
            <span>{text}</span>
        </button>
    )
}

export default ListSecondButton;