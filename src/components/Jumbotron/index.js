import React from "react"
import "./style.css"

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Nick Adams{props.children}</h1>
                <p className="lead">
                    <br>
                    </br>
                    <br>
                    </br>
                    https://thebigdeal916.github.io/React-Portfolio/
                    <br>
                    </br>
                </p>
            </div>
        </div>
    )
}

export default Jumbotron;