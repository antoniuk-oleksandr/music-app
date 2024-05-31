import {SignType} from "@/types/SignType";

type ForgotPasswordMessageProps = {
    type: SignType,
}

const ForgotPasswordMessage = (props: ForgotPasswordMessageProps) => {
    if(props.type === SignType.SignUp) return null;
    return (
        <a>Forgot password?</a>
    )
}

export default ForgotPasswordMessage;