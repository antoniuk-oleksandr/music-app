import {TokenInfo} from "@/types/TokenInfo";

export type TokensStatus = {
    signedIn: boolean | null,
    tokens: TokenInfo | null,
}