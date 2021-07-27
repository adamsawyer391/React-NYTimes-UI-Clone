import React from 'react'
import './LeadArticle.css'

class BlockArticle extends React.Component {
    render(){
        return (
            <div className="lead-article-container-block">
                <h3 className="lead-article-container-block-headline">
                    {this.props.headline}
                </h3>
                <p className="lead-article-container-block-paragraph">
                    {this.props.body}
                </p>
            </div>
        )
    }
}
export default BlockArticle
