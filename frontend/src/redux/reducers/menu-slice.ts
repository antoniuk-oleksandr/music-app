import {createSlice} from '@reduxjs/toolkit';
import {MenuState} from "@/types/MenuState";

type MenusState = {
    [key: string]: MenuState,
}

const initialState: MenusState = {};

export const menuSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        addMenu(state, action) {
            const menuName = action.payload;
            state[menuName] = {isOpened: false, x: null, y: null, additionalData: null};
        },
        setIsMenuOpened(state, action) {
            const {menuName, isOpened, x, y, additionalData} = action.payload;
            state[menuName] = {...state[menuName], x, y, isOpened, additionalData};
        },
        setMenuLocation(state, action) {
            const {menuName, x, y} = action.payload;
            state[menuName] = {...state[menuName], x, y};
        }
    },
});

export const {addMenu, setIsMenuOpened, setMenuLocation} = menuSlice.actions;
export default menuSlice.reducer;