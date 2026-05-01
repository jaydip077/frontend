import React from 'react'
import Navbar from './navbar'
import Content from './content'
import Footer from './footer'

export default function Layout() {
  return (
    <div>
        <Navbar />      
        <main className="content-wrapper">
          <Content />
        </main>
        <Footer />
    </div>
  )
}

