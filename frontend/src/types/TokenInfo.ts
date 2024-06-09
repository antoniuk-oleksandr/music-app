export type TokenInfo = {
    jwt: Jwt,
    refresh: string,
}

export type Jwt = {
    token: string,
    expiration: number
};