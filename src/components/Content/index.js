import React from "react";
import "./style.css"

function Content(props) {
    return (
      
        <p className="ass">
            I am an up and coming software developer based out of Sacramento, CA,
            This site is dedicated to showcasing my growth and work as an aspiring
            developer. This site was built using React.js, other tech i'm familiar with
            is HTML, CSS, JavaScript, MySQL, MongoDB, express, node.js. If you are
            interested in contacting me my info is in either of the colomns to either side
            of this content, links to my work are in the navbar.
        {props.children}</p>
    )
}

export default Content;