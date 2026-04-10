import React from 'react'

export function Exercise() {
    const head ="Welcome to JSX";
    const para = "JSX allows you to write HTML-like syntax inside JavaScript.";

    return(
        <>
        <div>
            <h1>{head}</h1>
            <p>{para}</p>
        </div>
        </>
    )

}
