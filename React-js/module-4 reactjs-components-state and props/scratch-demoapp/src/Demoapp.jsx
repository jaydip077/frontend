import React from "react";

const a=10;
const b=20;
const c=a+b;
const d=a-b;
const e=a*b;
const f=a/b;

function Demo()
{
    return(
        <>
             <div className="app">
                <h1>addition of a+b={c}</h1>
                <h1>subtraction of a-b={d}</h1>
                <h1>multiplication of a*b={e}</h1>
                <h1>division of a/b={f}</h1>
             </div>
        </>
    )
}

export default Demo;