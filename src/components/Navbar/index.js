import React from "react";
import "./style.css";
import { Link } from "react-router-dom"



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#"><img src="https://image.shutterstock.com/image-vector/letter-na-logo-260nw-1068224639.jpg" class="img-fluid"
                    alt="Responsive image" height="30" width="30"></img></a>
                <ul class="nav">
                    <li className="nav-item">
                        <Link id="nav-1" to="/React-Portfolio">
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

        </div>
    )
}

export default Navbar;