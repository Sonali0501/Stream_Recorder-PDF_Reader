import { SAVE_VIDEO } from "./types";

export const saveVideo = (video) => {
    return {
        type: SAVE_VIDEO,
        payload: video
    }
}