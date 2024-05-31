import SignPageLayout from "@/pages/sign-in/SignPageLayout";
import TopSignText from "@/pages/sign-in/components/TopSignText";
import SignInput from "@/pages/sign-in/components/SingInput/SignInput";
import SignButton from "@/pages/sign-in/components/SignButton";
import ForgotPasswordMessage from "@/pages/sign-in/components/ForgotPasswordMessage";
import NoAccountMessage from "@/pages/sign-in/components/NoAccountMessage/NoAccountMessage";
import {IoPerson} from "react-icons/io5";
import {useSignUpInputsData} from "@/pages/sign-up/use-sign-up-inputs-data";
import {SignType} from "@/types/SignType";

const SignUpPage = () => {
    const singUpInputsState = useSignUpInputsData();
    const type = SignType.SignUp;

    return (
        <SignPageLayout
            type={type}
            signInputsState={singUpInputsState}
        >
            <TopSignText
                firstLineText={'Create account!'}
                icon={<IoPerson/>}/>
            <SignInput
                signInputsState={singUpInputsState}
                id={'username'}
                label={'Username'}
            />
            <SignInput
                signInputsState={singUpInputsState}
                id={'email'}
                label={'Email'}
            />
            <SignInput
                signInputsState={singUpInputsState}
                id={'password'}
                label={'Password'}
            />
            <SignButton text={'Sign Up'}/>
            <ForgotPasswordMessage type={type}/>
            <NoAccountMessage type={type}/>
        </SignPageLayout>
    )
}

export default SignUpPage;