import { combineReducers } from 'redux';
import { SAVE_VIDEO, DELETE_VIDEO } from '../ActionCreators/types';


const videos = (state = [] , action) => {
    switch(action.type) {
        case SAVE_VIDEO:
            return [...state, action.payload]
        case DELETE_VIDEO:
            return state.filter((item) => item !== action.payload)
        default:
            return state
    }
};

export default combineReducers({
    videosData: videos
});