import React from 'react'
import './Article.css'

const url = "https://ichef.bbci.co.uk/news/976/cpsprodpb/9588/production/_119508283_gettyimages-1234082668.jpg";

function Article() {
    return (
        <div className="article-area">
            <div className="story">
                <h2 className="top-story-healine-main">As China Boomed, It Didn't Take Climate Change Into Account. Now It Must.</h2>
                <ul className="top-story-list">
                    <li className="top-story-list-item">
                        <span>
                            China's rapid economic growth created cities ill-equipped to face extreme weather. Last week's 
                            dramatic floods showed that much will have to change.
                        </span>
                    </li>
                    <li>
                        <span>
                            While the country has begun taking aim at climate change, the question is whether it can ward
                            off the impact of already released greenhouse gasses.
                        </span>
                    </li>
                </ul>
            </div>
            <div className="image-area">
                <img className="top-story-image" src={url} alt="" />
                <p className="caption">Children wading through floodwaters on Saturday in Xinxiang, a town in Central China</p>
            </div>
        </div>
    )
}

export default Article
