import {createSlice} from '@reduxjs/toolkit';
import {DialogState} from "@/types/DialogState";

const initialState: DialogState = {
    isShown: null,
    text: null,
    color: null,
    ids: [],
};

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        setDialog(state, action) {
            state.isShown = action.payload[0];
            state.text = action.payload[1];
            state.color = action.payload[2];
            state.ids.push(action.payload[3]);
        },
        setIsDialogShown: (state, action) => {
            state.isShown = action.payload;
        }
    },
});

export const {setIsDialogShown, setDialog} = dialogSlice.actions;
export default dialogSlice.reducer;