# what is state in react js
1.state is in object formate in react js.
2.state is mutable can be changed or update one component data to another component..
3.state are used to read data| edit data | update data in react js.
4.state are passed and used datat one component to another component to parent to child and update also.
5.state data are access via hooks using useState() hook.


import React,{useState} from 'react' const[data,setData]=useState(0)
```
function App()
    {
        return(
            <>
                <h1>The data value is:{data}</h1>
            </>
        )
    }
export default App
```

# architecture of react js state

![alt text](image.png)

# what is destructuring in state ?
```
import React,{useState} from 'react'
const[data,setData]=useState(0)

 where data variable 
setDAta is function 
useState() stored any data types of values 
```

**Example of state**
```
import React,{useState} form "react";
function NameApp()
{
    //destructuring of state 
    const[name,setName]=useState("Jaydip Pithiya");
    return(
        <>
            <div className="app">
                <h1>Hello {name}</h1>
                <button type="button" onClick={()=>setName("Aksh patel")}>Change Name</button>
            </div>
        </>
    )
}

export default NameApp
``` 

```
 import React,{useState} from "react";
function NameMultipleApp()
{
//destructuring odf state 
const[name,setName]=useState({
  id:1,
  name:"Brijesh kumar pandey",
  age:35,
  salary:89500,
  address:"150 feet ring road rajkot"
});

// create a function for multiple data update via state 
const updData=()=>{
  setName({
  id:1,
  name:"Aksh patel",
  age:21,
  salary:9500,
  address:"behind navrangpura Ahemdabad 360005"
  })
}

return(
  <>
      <div className="app">
         
         <h1>Employee Id is  : {name.id}</h1> 
         <h2>Employee Name is  : {name.name}</h2> 
         <h3>Employee Age is  : {name.age}</h3> 
         <h4>Employee salary is  : {name.salary}</h4> 
         <h5>Employee Address is  : {name.address}</h5> 
         <button type="button" onClick={updData}>Change All ?</button>
      </div>
  </>
)   
}

export default NameMultipleApp

```

```
 import React,{ useState} from "react";
function CounterApp()
{
// destructured state 
const[count,setCount]=useState(0);
return(
  <>
      <div className="counter-app">
          <h1>The count default values is : {count}</h1>
          <button type="button" onClick={()=>setCount(count+1)}>+</button>
          <button type="button" onClick={()=>setCount(count-1)}>-</button>
          <button type="button" onClick={()=>setCount(0)}>Reset</button>
      </div>
  </>
)
}
export default CounterApp
```