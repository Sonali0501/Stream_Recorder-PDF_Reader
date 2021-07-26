import { SAVE_VIDEO, DELETE_VIDEO } from "./types";

export const saveVideo = (video) => {
    return {
        type: SAVE_VIDEO,
        payload: video
    }
}

export const deleteVideo = (video) => {
    return {
        type: DELETE_VIDEO,
        payload: video
    }
}