import React from "react";
import "./style.css"

function Content(props) {
    return (
        <div>
            <p className="info">
                I am a software developer based out of Sacramento, CA,
                This site is to showcase my growth as a new
                developer. If you are interested in contacting me my info is in the colomns to either side
                of this content.
            {props.children}</p>
        </div>
    )
}

export default Content;