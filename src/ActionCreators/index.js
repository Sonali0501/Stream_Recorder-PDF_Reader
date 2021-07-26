import { SAVE_VIDEO, GET_VIDEOS } from "./types";

export const saveVideo = (video) => {
    return {
        type: SAVE_VIDEO,
        payload: video
    }
}

export const getVideos = () => {
    return {
        type: GET_VIDEOS
    }
}