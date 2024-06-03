import VerificationCodeInput from "@/common-components/CodeInput/VerificationCodeInput";
import TopSignText from "@/pages/sign-in/components/TopSignText";
import { MdOutlineVerified } from "react-icons/md";
import SignButton from "@/pages/sign-in/components/SignButton";
import {Dispatch, SetStateAction, useState} from "react";

type VerificationProps = {
    digits: number[],
    setDigits: Dispatch<SetStateAction<number[]>>,
}

const Verification = (props: VerificationProps) => {

    return (
        <>
            <TopSignText
                iconSize={'text-5xl'}
                firstLineText={'Verification'}
                secondLineText={'Please enter the verification code'}
                thirdLineText={'we sent to your email address'}
                icon={<MdOutlineVerified />}/>
            <VerificationCodeInput {...props}/>
            <SignButton text={'Verify'} />
        </>
    )
}

export default Verification;