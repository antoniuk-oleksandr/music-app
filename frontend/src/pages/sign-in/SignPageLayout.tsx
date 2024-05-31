import {LayoutProps} from "@/types/LayoutProps";
import {motion} from "framer-motion";
import {Dispatch, FormEventHandler, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {handleSignSubmit} from "@/pages/sign-in/handlers";
import {SignType} from "@/types/SignType";

type SignInPageLayoutProps = LayoutProps & {
    signInputsState: {
        inputsData: SignInInputs | SignUpInputs,
        setInputsData: Dispatch<SetStateAction<SignInInputs | SignUpInputs>>,
    },
    type: SignType,
}

const SignPageLayout = (props: SignInPageLayoutProps) => {
    const {children, signInputsState, type} = props;
    const {inputsData} = signInputsState;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className="w-full h-svh grid place-items-center">
            <form
                onSubmit={(e) => handleSignSubmit(e, inputsData, type)}
                className={"bg-white w-[500px] px-6 py-16 flex rounded-lg drop-shadow-sm flex-col items-center text-lg text-neutral-600"}>
                {children}
            </form>
        </motion.div>
    )
}

export default SignPageLayout;