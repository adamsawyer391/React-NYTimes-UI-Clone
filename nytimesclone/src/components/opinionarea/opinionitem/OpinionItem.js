import React from 'react'
import './OpinionItem.css'

class OpinionItem extends React.Component {
    render(){
        return (
            <div className="opinion-item">
                <p className="opinion-item-paragraph">{this.props.authors}</p>
                <h2 className="opinion-item-heading">{this.props.headline}</h2>
            </div>
        )
    }
}

export default OpinionItem
