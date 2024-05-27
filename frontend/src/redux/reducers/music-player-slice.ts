import {createSlice} from '@reduxjs/toolkit';

export const musicPlayerSlice = createSlice({
    name: 'musicPlayer',
    initialState: {song: null, songQueue: [], repeat: null, songIndex: 0},
    reducers: {
        setSong(state, action) {
            state.song = action.payload;
            state.songQueue.push(action.payload as never);
        },
        setRepeat(state, action) {
            localStorage.setItem("repeat", JSON.stringify(action.payload));
            state.repeat = action.payload;
        },
        setSongQueue(state, action) {
            state.songQueue = action.payload;
            state.songIndex = 0;
            state.song = action.payload[0];
        },
        changeQueueSong(state, action) {
            state.songIndex = action.payload;
            state.song = state.songQueue[action.payload];
        }
    },
});

export const {setSong, setRepeat, setSongQueue, changeQueueSong} = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;