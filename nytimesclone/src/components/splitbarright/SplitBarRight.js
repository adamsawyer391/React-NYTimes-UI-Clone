import React from 'react'
import StandardArticle from '../standardarticle/StandardArticle'
import StandardArticleWithImage from '../standardarticlewithimage/StandardArticleWithImage'
import './SplitBarRight.css'

function SplitBarRight() {
    return (
        <div className="splitbar-right-container">
            <div className="splitbar-left">
                <StandardArticle headline="Rookie Bankers Sour on Wall Street's Pitch of Big Pay and Long Hours" body="As young professionals re-examine their 
                work-life balance, investment banking is becoming a less popular choice despite the money." />
            </div>
            <div className="splitbar-right">
                <StandardArticleWithImage headline="QR Codes Are Here to Stay. So Is the Tracking They Allow." body="Fueled by a desire for touchless transactions, 
                QR codes popped up everywhere in the pandemic. Businesses don't want to give them up." />
            </div>
        </div>
    )
}

export default SplitBarRight
