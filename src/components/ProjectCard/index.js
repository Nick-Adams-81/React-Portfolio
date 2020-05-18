import React from "react";
import "./style.css"

function ProjectCard(props) {
    return (
        <div>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <br></br>
            <a href={props.link} className="btn btn-primary btn-lg active" role="button"
           aria-pressed="true">{props.name}</a>
       </div>
    )
}

export default ProjectCard;