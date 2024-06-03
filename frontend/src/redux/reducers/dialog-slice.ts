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
        setDialog(state, action) {
            state.isShown = action.payload[0];
            state.text = action.payload[1];
            state.color = action.payload[2];
        },
        setIsDialogShown: (state, action) => {
            state.isShown = action.payload;
        },
        setDialogText: (state, action) => {
            state.text = action.payload;
        },
        setDialogTextColor: (state, action) => {
            state.color = action.payload;
        }
    },
});

export const {setDialogText, setIsDialogShown, setDialogTextColor, setDialog} = dialogSlice.actions;
export default dialogSlice.reducer;