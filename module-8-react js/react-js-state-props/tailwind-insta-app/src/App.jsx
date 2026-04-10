import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Headerapp from './Headerapp'
import Maincontent from './components/instamart/Maincontent'
import Footerapp from './Footerapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headerapp />
      <Maincontent />
      <Footerapp />
    </>
  )
}

export default App
