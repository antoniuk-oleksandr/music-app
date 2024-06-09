import InputLayout from "./InputLayout";
import {useRef, useState} from "react";
import InputLabel from "./components/InputLabel";
import InputElement from "@/common-components/Input/components/InputElement";

type InputProps = {
    label: string,
    id: string,
    className?: string,
    color?: string,
    border?: string,
}

const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <InputLayout
            {...props}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            inputRef={inputRef}
        >
            <InputLabel {...props} value={value} isFocused={isFocused}/>
            <InputElement
                value={value}
                setValue={setValue}
                {...props}
                inputRef={inputRef}
                setIsFocused={setIsFocused}
            />
        </InputLayout>
    )
}

export default Input;