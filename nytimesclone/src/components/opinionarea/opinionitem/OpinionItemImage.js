import React from 'react'
import OpinionItem from './OpinionItem'
import './OpinionItemImage.css'

const url = "https://static.politico.com/dims4/default/824d9ec/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F31%2F67%2Fc06c6a7e48709244fbdd1b772485%2F200306-lori-lightfoot-ap-773.jpg";

function OpinionItemImage() {
    return (
        <div className="opinion-image-container">
            <div className="opinion-item-with-image">
                <OpinionItem authors=" 'sway'" headline="'It's Tough To Be Mayor of Chicago': Lori Lightfoot Responds to Her Critics" />
            </div>
            <div className="opinion-item-image">
                <img className="opinion-item-image-image" src={url} alt="" />
            </div>
        </div>
    )
}

export default OpinionItemImage
