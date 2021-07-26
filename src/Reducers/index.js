import { combineReducers } from 'redux';
import { SAVE_VIDEO } from '../ActionCreators/types';


const videos = (state = [] , action) => {
    switch(action.type) {
        case SAVE_VIDEO:
            return [...state, action.payload]
        default:
            return state
    }
};

export default combineReducers({
    videosData: videos
});