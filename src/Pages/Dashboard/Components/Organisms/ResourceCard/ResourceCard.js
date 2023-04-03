import React from 'react'
import { useDispatch } from 'react-redux'

// Stylesheet
import "./Stylesheet/ResourceCard.css"

// Action Creators
import { preview, currentVideoTime } from '../../../redux/dashboardActions'

const ResourceCard = (props) => {
    const dispatch = useDispatch()

    const previewHandler = (e, type, content, timeStamp) => {
        console.log(e, type, content)
        dispatch(preview(type, content))
        dispatch(currentVideoTime(timeStamp))
    }

    return (
      <div className={'resourceCard inList' + props.timeStamp} onClick={(event) => previewHandler(event, props.type, props.content, props.timeStamp)}>
          {
              props.type === "img" 
              ? <img src={props.content} alt="Loading"/>
              : props.type === "text"
              ? <p> { props.content } </p>
              : ""
          }
      </div>
    )
}

export default ResourceCard