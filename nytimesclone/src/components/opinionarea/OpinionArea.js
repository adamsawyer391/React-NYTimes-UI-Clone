import React from 'react'
import './OpinionArea.css'
import OpinionItem from './opinionitem/OpinionItem'
import OpinionItemImage from './opinionitem/OpinionItemImage'

function OpinionArea() {
    return (
        <div className="opinion-area">
            <h4>
                Opinion
            </h4>
            <OpinionItem authors="gail collins and bret stephens" headline="When the Storming of the Capitol Met the Politics of Congress"/>
            <OpinionItemImage />
            <OpinionItem authors="john zavitsanos" headline="My Office Reopened at the Height of the Pandemic. We Thrived" />
            <OpinionItem authors="charles m. blow" headline="Mr. President, You're Just Plain Wrong on Voter Suppression" />
            <OpinionItem authors="james harding" headline="Biden Needs a Special Envoy on Covid. Enlist Bush." />
            <OpinionItem authors="ned resnikoff" headline="Homelessness Threatens Democracy" />
        </div>
    )
}

export default OpinionArea
