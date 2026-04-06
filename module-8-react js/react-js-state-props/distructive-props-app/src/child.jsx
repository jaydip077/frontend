import React from "react";
import './App.css'
import { FaUser,FaBirthdayCake,FaGenderless } from "react-icons/fa";

function Child({name,age,gender}){
    return(
        <>
        <div className="ap">
            <h2><FaUser/>Name:{name}</h2>
            <h2 ><FaBirthdayCake/>Age:{age}</h2>
            <h2><FaGenderless/>Gender:{gender}</h2>
        </div>
        </>
    )
}
export default Child;