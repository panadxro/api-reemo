import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Nav/Navbar'
import { SessionProvider } from '../contexts/session.context'

const Layout = () => {
  return (
    <SessionProvider>
      <Navbar/>
      <Outlet/>
    </SessionProvider>
  )
}

export default Layout