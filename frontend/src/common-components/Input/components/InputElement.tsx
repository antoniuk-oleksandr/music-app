import {ChangeEvent, Dispatch, MutableRefObject, SetStateAction} from "react";
import {useFormContext} from "react-hook-form";
import {handleInputBlur, handleInputChange} from "@/common-components/Input/handlers";

type InputElementProps = {
    inputRef: MutableRefObject<HTMLInputElement | null>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    id: string,
    setValue: Dispatch<SetStateAction<string>>,
    value: string,
}

const InputElement = (props: InputElementProps) => {
    const {inputRef, setIsFocused, id, setValue, value} = props;
    const {register,} = useFormContext();

    const {
        ref: formRef,
        onChange: formOnChange,
        onBlur: formOnBlur,
        ...rest
    } = register(id, {required: true});

    return (
        <input
            autoComplete={'off'}
            value={value}
            {...register(id, {required: true})}
            onChange={(e) => handleInputChange(e, setValue, formOnChange)}
            onBlur={(e) => handleInputBlur(e, setIsFocused, formOnBlur)}
            type="text"
            className={`w-full outline-none z-10`}
            ref={(e) => {
                formRef(e);
                inputRef.current = e;
            }}
            {...rest}
        />
    )
}

export default InputElement;