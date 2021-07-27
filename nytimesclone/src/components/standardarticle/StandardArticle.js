import React from 'react'
import './StandardArticle.css'

class StandardArticle extends React.Component {
    render(){
        return (
            <div className="standard-article-container">
                <h3 className="standard-article-headline">
                    {this.props.headline}
                </h3>
                <p className="standard-article-body">
                    {this.props.body}
                </p>
            </div>
        )
    }
}

export default StandardArticle
