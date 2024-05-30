import {createSlice} from '@reduxjs/toolkit';
import {Device} from "@/types/Device";

type WrapperState = {
    device: Device | null;
    isNavbarHidden: boolean | null;
}

const initialState: WrapperState = {
    device: null,
    isNavbarHidden: null,
};

export const wrapSlice = createSlice({
    name: 'wrapper',
    initialState,
    reducers: {
        setDevice: (state, action) => {
            if (state.device === action.payload) return;
            state.device = action.payload;
        },
        changeIsNavbarHidden: (state) => {
            state.isNavbarHidden = !state.isNavbarHidden;
        },
        setIsNavbarHidden: (state, action) => {
            state.isNavbarHidden = action.payload;
        },
    },
});

export const {changeIsNavbarHidden, setDevice, setIsNavbarHidden} = wrapSlice.actions;
export default wrapSlice.reducer;