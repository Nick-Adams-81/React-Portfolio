import React from "react";
//import NavTabs from "../NavTabs"
import "./style.css";
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <ul class="nav">
                <li className="nav-item">
                    <Link id="nav-1" to="/">
                        Home
                </Link>
                </li>
               
                <li className="nav-item">
                    <Link id="nav-2" to="/portfolio">
                        Portfolio
                </Link>
                </li>
                
            </ul>


        </nav>



    )
}

export default Navbar;