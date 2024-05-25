import { combineReducers } from 'redux';
import counterReducer from "@/redux/reducers/music-player-slice"

const rootReducer = combineReducers({
    musicPlayer: counterReducer,
});

export default rootReducer;
