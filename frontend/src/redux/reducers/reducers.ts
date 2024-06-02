import { combineReducers } from 'redux';
import musicPlayerSlice from "@/redux/reducers/music-player-slice"
import wrapSlice from "@/redux/reducers/wrap-slice";
import dialogSlice from "@/redux/reducers/dialog-slice";

const rootReducer = combineReducers({
    musicPlayer: musicPlayerSlice,
    wrapper: wrapSlice,
    dialog: dialogSlice,
});

export default rootReducer;
