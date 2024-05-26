import { combineReducers } from 'redux';
import musicPlayerSlice from "@/redux/reducers/music-player-slice"

const rootReducer = combineReducers({
    musicPlayer: musicPlayerSlice,
});

export default rootReducer;
