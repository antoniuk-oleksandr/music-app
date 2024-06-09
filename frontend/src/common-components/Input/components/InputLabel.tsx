type InputLabelProps = {
    isFocused: boolean,
    label: string,
    value: string,
    color?: string,
}

const InputLabel = (props: InputLabelProps) => {
    const {isFocused, label, value, color} = props;

    return (
        <label
            className={`absolute bg-white px-1 left-2 duration-150 ease-out cursor-text ${color}
                ${isFocused || value.length > 0 ? 'top-[-12px]' : 'top-[calc((100%-24px)/2)]'}`}
            htmlFor=""
        >{label}</label>
    )
}

export default InputLabel;