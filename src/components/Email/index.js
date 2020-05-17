import React from "react";
import "./style.css"


function Email(props) {
    return (
        <div className="e-mail">
            <p>
                Email: thebigdeal916@icloud.com
            </p>
            <p>
                Phone: (916)996-1799{props.children}
            </p>
        </div>
    )
}

export default Email;