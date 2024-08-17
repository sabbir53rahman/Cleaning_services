import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout