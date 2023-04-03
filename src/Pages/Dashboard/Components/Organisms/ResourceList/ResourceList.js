import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

// Stylesheet
import "./Stylesheet/ResourceList.css"

// Components
import ResourceCard from '../ResourceCard/ResourceCard'

// Data
import TempData from "../../../../../Tempdata/TempData.json"


const ResourceList = (props) => {
    const [displayedResources, setDisplayedResources] = useState([])
    const [lastTime, setLastTime] = useState(-1)
    const player = useSelector(state => state.player)
    const isPlaying = useSelector(state => state.playPause)

    let allResources = TempData['result']

    useEffect(() => {
        let getNewResource;

        if (player && isPlaying) {
            getNewResource = setInterval(() => {
                let len = document.getElementsByClassName("inList" + lastTime).length
                console.log(lastTime, "inList" + lastTime, document.getElementsByClassName("inList" + lastTime)[len - 1])
                document.getElementsByClassName("inList" + lastTime)[len-1]?.scrollIntoView()
                console.log("Running")
                let currTime = player.current.getCurrentTime()
                let key = parseInt(currTime)
                if (lastTime !== key && allResources?.hasOwnProperty(key)) {
                    console.log(lastTime)
                    setLastTime(key)
                    console.log(lastTime)
                    const tempresources = []
                    tempresources.push(<h2 id={"resourceTime" + key} className='resourceTime'>{key}</h2>)
                    allResources[String(key)].forEach((element) => {
                        tempresources.push(<ResourceCard type={element.type} content={element.content} timeStamp={key} />)
                    })
                    setDisplayedResources([...displayedResources, tempresources])
                }
            }, 1000);
        }

        return () => {
            clearInterval(getNewResource);
        }
        
    }, [player, isPlaying, allResources, displayedResources, lastTime])

    return (
        <div className='resourceList'>
            {displayedResources.length !== 0 ? displayedResources : <p className='noResourcesYet'> No Resources Yet </p>}
        </div>
    )
}

export default ResourceList



