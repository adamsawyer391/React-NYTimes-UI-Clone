import React from 'react'
import './BlockListItem.css'

class BlockListItem extends React.Component {
    render(){
        return (
            <div className="big-block-list-item-container">
                <h4 className="big-block-list-item">
                    {this.props.headline}
                </h4>
            </div>
        )
    }
}

export default BlockListItem
