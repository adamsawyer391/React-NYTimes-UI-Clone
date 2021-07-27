import React from 'react'
import './BigBlock.css'
import BlockListItem from './BlockListItem'
import SplitArticle from './SplitArticle'

function BigBlock() {
    return (
        <div className="big-block-container">
            <div className="title-bar-big-block">
                <h4>
                    More News
                </h4>
            </div>
            <div className="big-block-main-content-area">
                <div className="big-block-left">
                    <div className="first">
                        <SplitArticle />
                    </div>
                    <div className="second">
                        <h4 className="second-headline">
                            Brittney Spears Files to Remove Her Father From Conservatorship
                        </h4>
                        <p className="second-body">
                            Years after a strict legal arrangement gave James Spears control of her affairs, a lawyer for Ms. 
                            Spears asked the court to remove him from the arrangement.
                        </p>
                    </div>
                </div>
                <div className="big-block-right">
                    <BlockListItem headline="Booker Prize Longlist Is Unveiled" />
                    <BlockListItem headline="Homeless People Are Moved From New York Hotels to Shelters" />
                    <BlockListItem headline="Oklahoma and Texas Plan to Leave the Big 12 Conference" />
                    <BlockListItem headline="Business Updates; Tesla Reports a Big Jump in Profit" />
                    <BlockListItem headline="'Dune and Princess Diana Biopic to Debut at Venice" />
                </div>
            </div>
            
        </div>
    )
}

export default BigBlock
