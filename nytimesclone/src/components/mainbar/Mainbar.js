import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Mainbar.css'
import Button from '@material-ui/core/Button';

function Mainbar() {
    return (
        <div className="bar">

            <div className="left">
                <div className="mainbar-top">
                    <div className="block">
                        <div className="center">
                            <MenuIcon />
                        </div>
                    </div>
                    <div className="block">
                        <div className="center">
                            <SearchIcon />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="center-main">
                <ul className="version-edition-list">
                    <li className="list-item">
                        U.S.
                    </li>
                    <li className="list-item">
                        INTERNATIONAL
                    </li>
                    <li className="list-item">
                        CANADA
                    </li>
                    <li className="list-item">
                        ESPANOL
                    </li>
                    <li className="list-item">
                        CHINESE
                    </li>
                </ul>
            </div>

            <div className="right">
                <div className="slight-margin">
                    <Button variant="contained" color="primary">Subscribe for $1/week</Button>
                </div>
                
                <Button variant="contained" color="primary">Login</Button>
            </div>

            

        </div>
    )
}

export default Mainbar
