import {createSlice} from '@reduxjs/toolkit';
import {TokensStatus} from "@/types/TokensStatus";

const initialState: TokensStatus = {
    signedIn: null,
    tokens: null,
};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setTokenStore(state, action) {
            state.signedIn = action.payload[0];
            state.tokens = action.payload[1];
        },
    },
});

export const {setTokenStore} = tokenSlice.actions;
export default tokenSlice.reducer;