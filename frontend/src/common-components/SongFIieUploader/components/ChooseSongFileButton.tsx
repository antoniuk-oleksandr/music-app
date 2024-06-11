import {MutableRefObject} from "react";

type ChooseSongFileButtonProps = {
    inputRef: MutableRefObject<HTMLInputElement | null>,
}

const ChooseSongFileButton = (props: ChooseSongFileButtonProps) => {
    const {inputRef} = props;

    return (
        <button
            onClick={() => inputRef.current && inputRef.current.click()}
            className={"rounded-md bg-neutral-200 py-2 px-4 text-sm duration-200 ease-out active:scale-95 hover:bg-neutral-300 outline-none font-semibold whitespace-nowrap"}
            type={"button"}
        >Choose Audio</button>
    )
}

export default ChooseSongFileButton;