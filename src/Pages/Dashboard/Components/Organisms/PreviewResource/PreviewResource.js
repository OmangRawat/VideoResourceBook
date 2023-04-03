import React from 'react'
import { useSelector } from "react-redux"

// Stylesheet
import "./Stylesheet/PreviewResource.css"

// Component
import ResourceCard from '../ResourceCard/ResourceCard'

const PreviewResource = (props) => {
  const preview = useSelector(state => state.preview)
  
  return (
    <div className='previewResource'>
        {
            props.type !== ""
            ? <ResourceCard type={preview.type} content={preview.content}/>
            : <p> Nothing to Preview </p>
        }
    </div>
  )
}

export default PreviewResource