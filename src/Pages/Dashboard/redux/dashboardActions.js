import { PLAYER, PLAY_PAUSE, CURRENT_VIDEO_TIME, PREVIEW } from "./dashboardActionTypes";

export const player = (player) => {
    return {
        type : PLAYER,
        payload: player
    }
}

export const playPause = (playPause) => {
    return {
        type : PLAY_PAUSE,
        payload: playPause
    }
}

export const currentVideoTime = (timeStamp) => {
    return {
        type : CURRENT_VIDEO_TIME,
        payload: timeStamp
    }
}

export const preview = (type, content) => {
    return {
        type : PREVIEW,
        payload : {
            "type": type,
            "content" : content
        }
    }
}

