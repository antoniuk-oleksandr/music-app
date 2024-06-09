import {useTokens} from "@/common-use-effects/use-tokens";

const TokenHandler = () => {
    const token = useTokens();
    console.log(token);

    return null;
}

export default TokenHandler;