import React from "react";
import "./style.css"

function ProjectCard(props) {
    return (
        <div>
            <div className="img-container">
                <img src={props.image} alt="something"/>
            </div>
            <br></br>
            <a href={props.link} className="btn btn-primary btn-lg active" role="button"
           aria-pressed="true">{props.name}</a>
          <br></br>
          <br></br>
          <br></br>
           <a href={props.repo} className="btn2 btn-warning btn-lg active" role="button"
           aria-pressed="true">{props.repoName}</a>
         
          
       </div>
    )
}

export default ProjectCard;