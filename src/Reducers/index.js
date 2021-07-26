import { combineReducers } from 'redux';
import { GET_VIDEOS, SAVE_VIDEO } from '../ActionCreators/types';


const videos = (state = [] , action) => {
    switch(action.type) {
        case GET_VIDEOS:
            return state
        case SAVE_VIDEO:
            return [...state, action.payload]
        default:
            return state
    }
};

export default combineReducers({
    videosData: videos
});