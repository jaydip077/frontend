import React,{useState} from "react";

function NameApp()
{
    const[name,setName]=useState("JAydeep Pithiya");
    return(
        <>
            <div className="App">
                <h1>My name is :{name}</h1>
                <button type="button" onClick={()=>setName("Krunal")}>Change Name</button>
            </div>
        </>
    )
}
export default NameApp;