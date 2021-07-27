import React from 'react'
import LeadStory from './leadstory/LeadStory'
import SideStories from './leadstory/SideStories'
import './TopStories.css'

function TopStories() {
    return (
        <div className="story-area">
            <div className="top-story-left">
                <LeadStory />
            </div>
            <div className="top-story-right">
                <SideStories />
            </div>
        </div>
    )
}

export default TopStories
