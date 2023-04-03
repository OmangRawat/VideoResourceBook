import { PLAYER, PLAY_PAUSE, CURRENT_VIDEO_TIME, PREVIEW  } from "./dashboardActionTypes"

let initialState = {
    
    player: 0,
    playPause: false,
    currentVideoTime: 0,
    preview: {
        "type": "",
        "content": ""
    }

}

const dashboardReducer = ( state = initialState, action ) => {
    switch (action.type)
    {
        case PLAYER:
            return {
                ...state,
                player: action.payload
            }

        case PLAY_PAUSE:
            return {
                ...state,
                playPause: action.payload
            }

        case CURRENT_VIDEO_TIME:
            console.log("current", action.payload)
            return {
                ...state,
                currentVideoTime: action.payload
            }

        case PREVIEW:
            return {
                ...state,
                preview: {
                    ...action.payload
                }  
            }

        default:
            return state
    }
}

export default dashboardReducer;