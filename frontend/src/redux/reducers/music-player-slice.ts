import {createSlice} from '@reduxjs/toolkit';
import {Repeat} from "@/types/Repeat";

export const musicPlayerSlice = createSlice({
    name: 'musicPlayer',
    initialState: {song: null, songQueue: [], repeat: null, songIndex: 0},
    reducers: {
        setSong(state, action) {
            state.song = action.payload;
        },
        setRepeat(state, action) {
            localStorage.setItem("repeat", JSON.stringify(action.payload));
            state.repeat = action.payload;
        },
        setSongQueue(state, action) {
            state.songQueue = action.payload;
            state.songIndex = 0;
        },
        nextSong(state) {
            const songQLength = state.songQueue.length;

            if (state.repeat === Repeat.Queue && state.songIndex + 1 > songQLength) {
                state.songIndex = 0;
                state.song = state.songQueue[state.songIndex];
                return;
            }

            console.log("the fuck")

            if (songQLength < 0 || state.songIndex + 1 > songQLength) return;
            state.songIndex++;
            state.song = state.songQueue[state.songIndex];
        },
        prevSong(state) {
            const songQLength = state.songQueue.length;
            if (songQLength < 0 || state.songIndex - 1 < 0) return;
            state.songIndex--;
            state.song = state.songQueue[state.songIndex];
        },
    },
});

export const {setSong, setRepeat, setSongQueue, nextSong, prevSong} = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;