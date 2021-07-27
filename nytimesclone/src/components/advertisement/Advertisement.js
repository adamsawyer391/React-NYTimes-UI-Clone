import React from 'react'
import './Advertisement.css'

const url = "https://www.howtogeek.com/wp-content/uploads/2019/06/slack_logo.png?width=1198&trim=1,1&bg-color=000&pad=1,1";

function Advertisement() {
    return (
        <div className="advertisement-container">
            <p className="advertisement-paragraph">advertisement</p>
            {/* <img className="advertisement-image" src={url} alt="" /> */}
        </div>
    )
}

export default Advertisement
