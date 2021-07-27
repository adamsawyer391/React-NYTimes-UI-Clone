import React from 'react'
import './Titlearea.css';
import {getCurrentDate} from '../../functions/currentdate.js'

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_New_York_Times_logo.png/800px-The_New_York_Times_logo.png";

function TitleArea() {
    return (
        <div className="container">

            <div className="left">
                <div className="date">
                    {getCurrentDate()}
                </div>
                <p className="t1">Today's Paper</p>
            </div>

            <div className="center">
                <img src={logo} alt="" className="logo-img" />
            </div>

            <div className="right">

            </div>

        </div>
    )
}

export default TitleArea
