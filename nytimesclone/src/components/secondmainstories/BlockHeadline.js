import React from 'react'

class BlockHeadline extends React.Component {
    render(){
        return (
            <div>
                <h4>
                    {this.props.headline}
                </h4>
            </div>
        )
    }
}

export default BlockHeadline
