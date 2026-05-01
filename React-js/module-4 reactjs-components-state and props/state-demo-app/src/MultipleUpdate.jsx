import React,{useState} from "react";

function Multiple(){
    const[user1,setUser]=useState({
        id:1,
        name:"Jaydeep Pithiya",
        age:22,
        address:"rajkot"
    });

    const upData=()=>{
        setUser({
            id:2,
            name:"Krunal",
            age:23,
            address:"Ahmedabad"
        })
    }

    return(
        <>
            <div className="app">
                <h1>Id Is:{user1.id}</h1>
                <h1>My Name Is:{user1.name}</h1>
                <h1>Age Is:{user1.age}</h1>
                <h1>Address Is:{user1.address}</h1>
            </div>
            <button type="button" onClick={upData}>Update Data </button>
        </>
    )
}

export default Multiple;