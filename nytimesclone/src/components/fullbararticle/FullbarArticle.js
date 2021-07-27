import React from 'react'
import './FullbarArticle.css'

class FullbarArticle extends React.Component {
    render(){
        return (
            <div className="fullbar-article-container">
                <div className="fullbar-headline">
                    <h3>
                        {this.props.headline}
                    </h3>
                </div>
                <div className="fullbar-body">
                    {this.props.body}
                </div>
            </div>
        )
    }
}

export default FullbarArticle
