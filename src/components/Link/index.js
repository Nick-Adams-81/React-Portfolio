import React from "react"
import "./style.css"


function Link() {
    return (
        <div className="placeholder">
            <img
                src={require("./linkedin.png")}
                alt="Responsive img">
            </img>
            <br></br>
            <br></br>


            <a href="https://www.linkedin.com/in/nick-adams-052093199/" className="btn btn-primary btn-lg active" role="button" id="btn-1"
                aria-pressed="true">My Linkedin</a>
            <br></br>
            <br></br>

            <img
                src={require("./github.jpg")}
                alt="Responsive img">
            </img>
            <br></br>
            <br></br>

            <a href="https://github.com/thebigdeal916" className="btn btn-primary btn-lg active" role="button" id="btn-2"
                aria-pressed="true">My Github</a>

        </div>

    )
}

export default Link;

