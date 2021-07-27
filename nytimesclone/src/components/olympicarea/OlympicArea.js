import React from 'react'
import './OlympicAra.css'

const url = "https://static01.nyt.com/images/2021/07/26/sports/26oly-live-gym1/26oly-live-gym1-threeByTwoMediumAt2X-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

function OlympicArea() {
    return (
        <div className="olympic-main-container">
            <div className="title-area-olympic">
                <h2 className="olympic-title">
                    Tokyo
                </h2>
                <ul className="olympic-list">
                    <li className="olympic-list-item">
                        Updates From Tokyo
                    </li>
                    <li className="olympic-list-item">
                        Medal Count
                    </li>
                    <li className="olympic-list-item">
                        Swimming Highlights
                    </li>
                </ul>
            </div>
            <div className="story-area">
                <div className="olympic-left">
                    <div className="olympic-article">
                        <p className="olympic-article-title">
                            live
                        </p>
                        <h2 className="olympic-headline">
                            Olympics Updates: Men's Gymnastics Final Could Be a Nail-Biter
                        </h2>
                        <p className="olympic-article-body">
                            Japan, China and Russia lead ahead of the men’s gymnastics team final. Teenagers swept the women’s skateboarding medals.
                        </p>
                    </div>
                    <h4 className="olympic-headline" style={{paddingTop: 10, letterSpacing: 0.5}}>
                        Katie Ledecky’s defeat in the 400-meter freestyle had the added sting of being her first-ever loss at the Olympics.
                    </h4>
                </div>
                <div className="olympic-right">
                    <img className="olympic-image" src={url} alt="" />
                    <p className="olympic-caption">
                        Daiki Hashimoto is the leader of the Japanese gymnastics team, which placed first in qualifications ahead of the team final. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OlympicArea
