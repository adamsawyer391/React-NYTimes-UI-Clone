import React from 'react'
import './RecommendItemEnd.css'

class RecommendItemEnd extends React.Component {
    render(){
        return (
            <div className="recommend-item-container-end">
                <div className="recommended-text-end">
                    <h4>
                        {this.props.headline}
                        {/* Listen to 'The Daily' */}
                    </h4>
                    <p>
                        {this.props.body}
                        {/* Breakthrough infections explained */}
                    </p>
                </div>
                <div className="recommended-image-end">
                    <img className="recommended-image-block-end" src={this.props.url} alt="" />
                </div>
                
                
            </div>
        )
    }
}

export default RecommendItemEnd