import {createSlice} from '@reduxjs/toolkit';

export const musicPlayerSlice = createSlice({
    name: 'musicPlayer',
    initialState: {song: null, songQueue: []},
    reducers: {
        setSong(state, action) {
            state.song = action.payload;
        },
        setSongQueue(state, action) {
            state.songQueue = action.payload;
        }
    },
});

export const {setSong} = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;