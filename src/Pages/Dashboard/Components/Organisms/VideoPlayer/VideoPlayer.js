import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from "react-redux"

// Stylesheet
import "./Stylesheet/VideoPlayer.css"

// Action Creators
import { player, playPause } from '../../../redux/dashboardActions'

 
const VideoPlayer = (props) => {
    // Setting Dispatcher of Actions
    const dispatch = useDispatch()

    // Setting Video Player Ref
    const playerRef = React.useRef()
    dispatch(player(playerRef))

    const startTime = useSelector(state => state.currentVideoTime)
    function changetoPlay()
    {
        console.log("Play")
        dispatch(playPause(true))
    }

    function changetoPause()
    {
        console.log("Pause")
        dispatch(playPause(false))
    }

    useEffect(() => {
        playerRef.current.seekTo(startTime, 'seconds');
    }, [startTime])
    

    return (
        <div className='videoplayer'>
            <ReactPlayer
                ref={playerRef}
                url="https://www.youtube.com/watch?v=mnwj6KxAvFc"
                className="react-player"
                isPlaying={props.isPlaying}
                width="100%"
                height="50vh"
                controls={true}
                onPlay={() => changetoPlay()}
                onPause={() => changetoPause()}
            />
        </div>
    )
}

export default VideoPlayer