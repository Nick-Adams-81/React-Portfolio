import React from "react";
import { Link } from "react-router-dom"


function NavTabs() {


   

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/">
                    home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" >
                    Portfolio
                </Link>
            </li>
            
        </ul>
    )
}
export default NavTabs;