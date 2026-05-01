import React from "react";

function Child(props)
{
    return(
        <>
            <div className="app">
                <h1>Student Name:{props.name}</h1>
                <h1>Student Age:{props.age} </h1>
                <h1>Student address:{props.address} </h1>
            </div>
        </>
    )
}

export default Child;
