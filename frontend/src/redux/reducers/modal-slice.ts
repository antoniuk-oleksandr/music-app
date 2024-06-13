import {createSlice} from '@reduxjs/toolkit';

type SetState = {
    isOpened: boolean,
    additionalData: any,
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
            state[modalName] = {isOpened: false, additionalData: null};
        },
        setIsModalOpened(state, action) {
            const {modalName, isOpened, additionalData} = action.payload;
            state[modalName].isOpened = isOpened;
            state[modalName].additionalData = additionalData;
        }
    },
});

export const {addModal, setIsModalOpened} = modalSlice.actions;
export default modalSlice.reducer;