import SignPageLayout from "./SignPageLayout";
import SignButton from "@/pages/sign-in/components/SignButton";
import SignInput from "@/pages/sign-in/components/SingInput/SignInput";
import NoAccountMessage from "@/pages/sign-in/components/NoAccountMessage/NoAccountMessage";
import TopSignText from "@/pages/sign-in/components/TopSignText";
import ForgotPasswordMessage from "@/pages/sign-in/components/ForgotPasswordMessage";
import {useSignInInputsData} from "@/pages/sign-in/use-inputs-data";
import {FaSignInAlt} from "react-icons/fa";
import {SignType} from "@/types/SignType";

const SignInPage = () => {
    const singInInputsState = useSignInInputsData();
    const type = SignType.SignIn;

    return (
        <SignPageLayout
            type={SignType.SignIn}
            signInputsState={singInInputsState}
        >
            <TopSignText
                firstLineText={'Welcome!'}
                secondLineText={'Sign in to your account'}
                icon={<FaSignInAlt />}/>
            <SignInput
                isPassword={false}
                signInputsState={singInInputsState}
                id={'usernameEmail'}
                label={'Username or email'}
            />
            <SignInput
                isPassword
                signInputsState={singInInputsState}
                id={'password'}
                label={'Password'}
            />
            <SignButton text={'Sign In'}/>
            <ForgotPasswordMessage type={type}/>
            <NoAccountMessage type={SignType.SignIn}/>
        </SignPageLayout>
    )
}

export default SignInPage;