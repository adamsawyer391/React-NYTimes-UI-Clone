import React from 'react'
import './SplitArticle.css'

const url = "https://ktla.com/wp-content/uploads/sites/4/2021/07/GettyImages-1326308693.jpg?w=1280";

function SplitArticle() {
    return (
        <div className="split-article-container">
            <div className="split-article-left">
                <h1 className="split-article-headline">
                    Final Victim of Florida Condo Collapse Is Identified
                </h1>
                <p className="split-article-text">
                    A relative of Estelle Hedaya, 54, said the authorities had identified her remains. The final death toll is 98.
                </p>
            </div>
            <div className="split-article-right">
                <img className="split-article-image" src={url} alt="" />
                <p className="split-article-caption">
                    Family and friends of the victims held a candlelight vigil for the victims of the Champlain Towers South collapse in Surfside, Fla., this month.
                </p>
            </div>
        </div>
    )
}

export default SplitArticle
