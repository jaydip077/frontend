import React from "react";

function Employee(props){
    return(
        <>
            <div className="app">
                <h1>employee Id:{props.id}</h1>
                <h1>employee Name:{props.name} </h1>
                <h1>employee address:{props.address} </h1>
            </div>
        </>
    )
}
export default Employee;