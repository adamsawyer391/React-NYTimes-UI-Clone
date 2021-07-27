import React from 'react'
import './RecommendItem.css'

class RecommendItem extends React.Component {
    render(){
        return (
            <div className="recommend-item-container">
                <div className="recommended-text">
                    <h4>
                        {this.props.headline}
                        {/* Listen to 'The Daily' */}
                    </h4>
                    <p>
                        {this.props.body}
                        {/* Breakthrough infections explained */}
                    </p>
                </div>
                <div className="recommended-image">
                    <img className="recommended-image-block" src={this.props.url} alt="" />
                </div>
                
                
            </div>
        )
    }
}

export default RecommendItem
