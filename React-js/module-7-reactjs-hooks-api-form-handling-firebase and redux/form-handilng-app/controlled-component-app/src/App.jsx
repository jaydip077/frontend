import React, {useState} from "react";

export default function App() {
  //Destructing the event object to get the name and value of the input field
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    age: ""

  });

  //Create a function to handle the change event of the input fields
  const handleChangeForm = (e) => {
    const{name, value} = e.target;
    //update the state of the data object with the new value of the input field
    setData({
      ...data,
      [name]:value
    })
  }

  //Create a function to handle the submit event of the form
  const addFormData =(e)=>{
    //Prevent the default behavior of the form submit event
    e.preventDefault();
    //Log the data object to the console
    console.log(data);

     //alert('my name and email is :'+data.name + data.email)

//sweet alert messages

// Swal.fire({
//   title: "Form handeling output?",
//   text: "My Name is :"+data.name  + "\n" + "My email is :"+data.email,
//   icon: "question"
// });

  }
  return(
    <>
      <h2>From Handling</h2>
      <form onSubmit={addFormData}>
        name: <input type="text" name="name" value={data.name} onChange={handleChangeForm} />
        <br/><br/>
        email: <input type="email" name="email" value={data.email} onChange={handleChangeForm} />
        <br/><br/>
        phone: <input type="text" name="phone" value={data.phone} onChange={handleChangeForm} />
        <br/><br/>
        age: <input type="text" name="age" value={data.age} onChange={handleChangeForm} />
        <br/><br/>
        <input type="submit" value="Submit" />

      </form>
    </>
  )
}