import React from 'react'

// Stylesheet
import "../Dashboard/Stylesheet/Dashboard.css"

// Components
import VideoPlayer from './Components/Organisms/VideoPlayer'
import ResourceList from './Components/Organisms/ResourceList/ResourceList'
import PreviewResource from './Components/Organisms/PreviewResource/PreviewResource'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='videoAndPreview'>
                <VideoPlayer />
                <PreviewResource />
            </div>
            <ResourceList />
        </div>
    )
}

export default Dashboard