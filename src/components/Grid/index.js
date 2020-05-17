import React from "react";


// Exporting Container, Row, and Col components from this file.

// Container component allows use of bootstrap container without classnames
export function Container({ fluid, children}) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Row component lets us use a bootstrap row without classnames
export function Row({ fluid, children}) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}
// Col component lets us size bootstrap columns with less syntax.
export function Col({ size, children}) {
    return (
        <div
        className={size && size.split(" ")
    .map(size => "col-" + size)
.join(" ")}
>
    {children}
</div>
    )
}