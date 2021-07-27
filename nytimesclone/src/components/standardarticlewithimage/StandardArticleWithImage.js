import React from 'react'
import './StandardArticleWithImage.css'

const url = "https://static01.nyt.com/images/2021/07/23/business/00qr-codes1-HP/00qr-codes1-HP-threeByTwoSmallAt2X-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

class StandardArticleWithImage extends React.Component {
    render(){
        return (
            <div className="standard-article-image-container">
                <div className="standard-article-image-left">
                    <h4 className="standard-article-headline">
                        {this.props.headline}
                    </h4>
                    <p className="standard-article-body">
                        {this.props.body}
                    </p>
                </div>
                <div className="standard-article-image-right">
                    <img className="standard-image" src={url} alt="" />
                    <p className="standard-caption">
                        Teeth, a bar in San Francisco, began using digital menus based on QR code technology in August.
                    </p>
                </div>
            </div>
        )
    }
}

export default StandardArticleWithImage
