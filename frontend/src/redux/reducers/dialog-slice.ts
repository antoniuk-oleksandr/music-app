import {createSlice} from '@reduxjs/toolkit';
import {DialogState} from "@/types/DialogState";

const initialState: DialogState = {
    isShown: null,
    text: null,
    color: null,
};

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        setIsShown: (state, action) => {
            state.isShown = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        }
    },
});

export const {setText, setIsShown, setColor} = dialogSlice.actions;
export default dialogSlice.reducer;