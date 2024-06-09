import {createSlice} from '@reduxjs/toolkit';

type SetState = {
    isOpened: boolean,
}

type ModalsState = {
    [key: string]: SetState,
}

const initialState: ModalsState = {};

export const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        addModal(state, action) {
            const modalName = action.payload;
            state[modalName] = {isOpened: false};
        },
        setIsModalOpened(state, action) {
            const {modalName, isOpened} = action.payload;
            state[modalName].isOpened = isOpened;
        }
    },
});

export const {addModal, setIsModalOpened} = modalSlice.actions;
export default modalSlice.reducer;