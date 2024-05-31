type SignButtonProps = {
    text: string;
}

const SignButton = (props: SignButtonProps) => {
    const {text} = props;

    return (
        <button
            type={"submit"}
            className={"w-full font-semibold bg-red-500 rounded-lg text-lg py-4 text-white hover:bg-red-400 duration-200 ease-out active:scale-95 active:outline-0 my-2"}
        >{text}</button>
    )
}

export default SignButton;