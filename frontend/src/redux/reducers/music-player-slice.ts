import {createSlice} from '@reduxjs/toolkit';

export const musicPlayerSlice = createSlice({
    name: 'musicPlayer',
    initialState: {song: null, isPlaying: false},
    reducers: {
        pause(state) {
            state.isPlaying = false;
        },
        play(state) {
            state.isPlaying = true;
        },
        setSong(state, action) {
            state.song = action.payload;
        }
    },
});

export const {setSong} = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;