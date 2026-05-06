import React, {useState} from 'react'
import Swal from 'sweetalert2'



export default function Employeedata() {
  const [data, setData] = useState({
    name: '',
    email: '',
    position: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const addFormData = (e) => {
    e.preventDefault()
    // alert(
    //   `Employee Saved:\nName: ${data.name}\nEmail: ${data.email}\nPosition: ${data.position}`
    // )
      Swal.fire({
      title: "Form handeling output",
      text: "My Name is :"+data.name  + "\n" + "My email is :"+data.email + "\n" + "My position is :"+data.position,
        icon: "success",
        });
    console.log(data)
  }


  return (
    <>
      <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-slate-50 to-white px-4 py-10">
        <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-center text-slate-900">
              Employee data
            </h1>
            
          </div>

          <form className="space-y-5" onSubmit={addFormData}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={data.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-slate-700"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                placeholder="Enter your position"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                value={data.position}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-2.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

