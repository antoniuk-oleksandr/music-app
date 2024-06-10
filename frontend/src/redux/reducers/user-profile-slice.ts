import {createSlice} from '@reduxjs/toolkit';

type UserProfileState = {
    username: string | null,
    avatarPath: string | null,
    id: number | null,
}

const initialState: UserProfileState = {
    username: null,
    avatarPath: null,
    id: null,
};

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.avatarPath = action.payload.avatarPath;
        }
    },
});

export const {setUserProfile} = userProfileSlice.actions;
export default userProfileSlice.reducer;