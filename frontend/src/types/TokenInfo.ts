export type TokenInfo = {
    jwt: {
        token: string,
        expiration: number
    },
    refresh: string,
}