import { combineReducers } from 'redux';
import musicPlayerSlice from "@/redux/reducers/music-player-slice"
import wrapSlice from "@/redux/reducers/wrap-slice";

const rootReducer = combineReducers({
    musicPlayer: musicPlayerSlice,
    wrapper: wrapSlice,
});

export default rootReducer;
