import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import data from './Data.jsx'

function App() {

  return (
    <>
    <div className='app'>
      {data && data.map((item) =>{
        return(
          <div className='emp-grid'>
            <p><img src={item.image} alt={item.name}></img></p>
            <p><b>Id ID:</b>{item.id}</p>
            <p><b>name:</b>{item.name}</p>
            <p><b>price:</b>{item.price}</p>
          </div>
        )
      })}

    </div>
    </>
  )
}

export default App
