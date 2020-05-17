import React from "react";
//import NavTabs from "../NavTabs"
import "./style.css";


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button type="button" class="btn btn-primary">
                   
                    </button>
           
                <button type="button" class="btn btn-primary">
                    <a className="navbar-brand" href="/">
                        Home
                    </a>
                    </button>
                    <br></br>
                    <button type="button" class="btn btn-primary">
                    <a className="navbar-brand" href="/Portfolio">
                        Portfolio
                    </a>
                    </button>
              
        </nav>



    )
}

export default Navbar;