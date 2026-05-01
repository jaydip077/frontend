import React from "react";
import Data from "./Data";
function EmployeeData(props) 
{
     return(
          <>
               {/* display employee data */}
               <h1 align="center"> All Employee Data</h1>
               <div className="app">
                         {/* Applied loop to fetch all dynamic data */}
                         {Data && Data.map((item) =>{
                              return(
                                   <div className="emp-grid">
                                        <p><img src={item.photo} alt="photo" /> </p>
                                        <p><b>Id is :</b>{item.id}</p>
                                        <p><b>Name is :</b>{item.name}</p>
                                        <p><b>Age is :</b>{item.age}</p>
                                        <p><b>Salary is :</b>{item.salary}</p>
                                   </div>
                              )
                         })}

               </div>
               
               
               
               
               {/* display employee data */}
               <h1 align="center">Employee Data Who's Age Greater Than 24</h1>
               <div className="app">
                         {/* Applied loop to fetch all dynamic data */}
                          {Data && Data.filter((item) => item.age >24).map((item) =>{
                              return(
                                   <div className="emp-grid">
                                        <p><img src={item.photo} alt="photo" /> </p>
                                        <p><b>Id is :</b>{item.id}</p>
                                        <p><b>Name is :</b>{item.name}</p>
                                        <p><b>Age is :</b>{item.age}</p>
                                        <p><b>Salary is :</b>{item.salary}</p>
                                   </div>
                              )
                         })}

               </div>


                {/* display employee data */}
               <h1 align="center">Employee Data Who's Salary Greater Than 50000</h1>
               <div className="app">
                         {/* Applied loop to fetch all dynamic data */}
                          {Data && Data.filter((item) => item.salary > 50000).map((item) =>{
                              return(
                                   <div className="emp-grid">
                                        <p><img src={item.photo} alt="photo" /> </p>
                                        <p><b>Id is :</b>{item.id}</p>
                                        <p><b>Name is :</b>{item.name}</p>
                                        <p><b>Age is :</b>{item.age}</p>
                                        <p><b>Salary is :</b>{item.salary}</p>
                                   </div>
                              )
                         })}

               </div>

          </>
     );
}
export default EmployeeData;