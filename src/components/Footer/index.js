import React from "react";
import "./style.css"

function Footer(props) {
    return (
        <footer className="footer">
            <span>Copyright Nick Adams MMXX{props.children}</span>
        </footer>
    )
}

export default Footer