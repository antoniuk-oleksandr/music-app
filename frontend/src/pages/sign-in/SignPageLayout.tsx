import {LayoutProps} from "@/types/LayoutProps";
import {motion} from "framer-motion";
import {Dispatch, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {handleSignSubmit} from "@/pages/sign-in/handlers";
import {SignType} from "@/types/SignType";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

type SignInPageLayoutProps = LayoutProps & {
    signInputsState: {
        inputsData: SignInInputs | SignUpInputs,
        setInputsData: Dispatch<SetStateAction<SignInInputs | SignUpInputs>>,
    },
    type: SignType,
    setVerificationState?: Dispatch<SetStateAction<boolean>>,
    digits?: number[],
    verificationState: boolean,
}

const SignPageLayout = (props: SignInPageLayoutProps) => {
    const {children, signInputsState, type, setVerificationState, digits, verificationState} = props;
    const {inputsData} = signInputsState;
    const router = useRouter();
    const dispatch = useDispatch();
    const {ids} = useSelector((state: any) => state.dialog);


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className="w-full h-svh grid place-items-center">
            <form
                onSubmit={(e) => handleSignSubmit(e, inputsData, type, router,
                    dispatch, verificationState, ids, setVerificationState, digits)}
                className={"bg-white w-[500px] px-6 py-16 flex rounded-lg drop-shadow-sm flex-col items-center text-lg text-neutral-600"}>
                {children}
            </form>
        </motion.div>
    )
}


export default SignPageLayout;