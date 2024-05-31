import NoAccountMessageLayout from "./NoAccountMessageLayout";
import {useRouter} from "next/router";
import {SignType} from "@/types/SignType";

type NoAccountMessageProps = {
    type: SignType,
}

const NoAccountMessage = (props: NoAccountMessageProps) => {
    const {type} = props;
    const firstPart = type === SignType.SignIn ? "Don't have an account?" : "Have an account?";
    const secondPart = type === SignType.SignIn ? "Sign Up" : "Sign In";
    const route = type === SignType.SignIn ? "/sign-up" : "/sign-in";
    const router = useRouter();

    return (
        <NoAccountMessageLayout>
            <span>{firstPart}</span>
            <span
                onClick={() => router.push(route)}
                className={"text-red-500 cursor-pointer"}
            >{secondPart}</span>
        </NoAccountMessageLayout>
    )
}

export default NoAccountMessage;