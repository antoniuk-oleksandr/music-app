import { combineReducers } from 'redux';
import musicPlayerSlice from "@/redux/reducers/music-player-slice"
import wrapSlice from "@/redux/reducers/wrap-slice";
import dialogSlice from "@/redux/reducers/dialog-slice";
import tokenSlice from "@/redux/reducers/token-slice";
import modalSlice from "@/redux/reducers/modal-slice";
import userProfileSlice from "@/redux/reducers/user-profile-slice";

const rootReducer = combineReducers({
    musicPlayer: musicPlayerSlice,
    wrapper: wrapSlice,
    dialog: dialogSlice,
    token: tokenSlice,
    modals: modalSlice,
    userProfile: userProfileSlice
});

export default rootReducer;
