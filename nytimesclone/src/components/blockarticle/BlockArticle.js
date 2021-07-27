import React from 'react'
import StandardArticle from '../standardarticle/StandardArticle'
import './BlockArticle.css'

// const url = "https://static01.nyt.com/images/2021/07/25/multimedia/00xp-moses2-02/00xp-moses2-02-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

class BlockArticle extends React.Component {
    render(){
        return (
            <div className="block-article-container">
    
                <div className="block-article-left">
                    {this.props.component}
                    {/* <StandardArticle headline="Bob Moses, Crusader for Civil Rights and Math Education, Dies at 86" body="He developed a reputation for extraordinary 
                    calm in the face of violence 
                    as he helped to register voters and trained activists in Mississippi in the 1960s." /> */}
                </div>
    
                <div className="block-article-center">
                    <img className="block-article-image" src={this.props.url} alt="" />
                </div>
    
                <div className="block-article-right">
                    <p className="block-article-caption">
                        {this.props.caption}
                    </p>
                </div>
                
            </div>
        )
    }
    
}

export default BlockArticle
