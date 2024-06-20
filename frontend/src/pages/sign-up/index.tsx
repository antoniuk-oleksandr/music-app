import SignPageLayout from "@/pages/sign-in/SignPageLayout";
import {useSignUpInputsData} from "@/pages/sign-up/use-sign-up-inputs-data";
import {SignType} from "@/types/SignType";
import {useState} from "react";
import SingUpContext from "@/pages/sign-up/SingUpContext";
import Verification from "@/pages/sign-up/components/Verification/Verification";

const SignUpPage = () => {
    const singUpInputsState = useSignUpInputsData();
    const [verificationState, setVerificationState] = useState(false);
    const [digits, setDigits] = useState<number[]>(new Array(6).fill(null));
    const type = verificationState ? SignType.Verification : SignType.SignUp;

    return (
        <SignPageLayout
            type={type}
            signInputsState={singUpInputsState}
            setVerificationState={setVerificationState}
            verificationState={verificationState}
            digits={digits}
        >
            {verificationState
                ? <Verification digits={digits} setDigits={setDigits}/>
                : <SingUpContext
                    setVerificationState={setVerificationState}
                    signInputsState={singUpInputsState}
                    type={type}
                />
            }
        </SignPageLayout>
    )
}

export default SignUpPage;