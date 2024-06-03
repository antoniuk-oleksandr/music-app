import TopSignText from "@/pages/sign-in/components/TopSignText";
import {IoPerson} from "react-icons/io5";
import SignInput from "@/pages/sign-in/components/SingInput/SignInput";
import SignButton from "@/pages/sign-in/components/SignButton";
import ForgotPasswordMessage from "@/pages/sign-in/components/ForgotPasswordMessage";
import NoAccountMessage from "@/pages/sign-in/components/NoAccountMessage/NoAccountMessage";
import {SignType} from "@/types/SignType";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {Dispatch, SetStateAction} from "react";

type SingUpContextProps = {
    type: SignType,
    signInputsState: {
        inputsData: SignInInputs | SignUpInputs,
        setInputsData: Dispatch<SetStateAction<SignInInputs | SignUpInputs>>,
    },
    setVerificationState: Dispatch<SetStateAction<boolean>>
}

const SingUpContext = (props: SingUpContextProps) => {
    const {type, signInputsState} = props;

    return (
        <>
            <TopSignText
                firstLineText={'Create account!'}
                icon={<IoPerson/>}/>
            <SignInput
                isPassword={false}
                signInputsState={signInputsState}
                id={'username'}
                label={'Username'}
            />
            <SignInput
                isPassword={false}
                signInputsState={signInputsState}
                id={'email'}
                label={'Email'}
            />
            <SignInput
                isPassword
                signInputsState={signInputsState}
                id={'password'}
                label={'Password'}
            />
            <SignButton text={'Sign Up'}/>
            <ForgotPasswordMessage type={type}/>
            <NoAccountMessage type={type}/>
        </>
    )
}

export default SingUpContext;