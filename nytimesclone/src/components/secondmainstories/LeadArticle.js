import React from 'react'
import './LeadArticle.css'

const url = "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/07/Hospital_Doctor_Covid_1296x728-header-1296x729.jpg?w=1155&h=2268";

class LeadArticle extends React.Component {
    render(){
        return (
            <div className="lead-article-container">
                <div className="lead-article-left">
                    <h3 className="lead-article-container-block-headline">
                        {this.props.headline}
                    </h3>
                    <p className="lead-article-container-block-paragraph">
                        {this.props.body}
                    </p>
                </div>
                <div className="lead-article-right">
                    <img className="lead-article-image" src={url} alt="" />
                    <p className="lead-article-paragraph">
                        Roberta Moses was knocking on doors in Shreveport, La., to inform people about the vaccine.
                    </p>
                </div>
            </div>
        )
    }
}

export default LeadArticle
