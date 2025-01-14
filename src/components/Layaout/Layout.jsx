import React from 'react'
import Navbar from '../Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

export default function Layout() {
  return (
    <>
      <Navbar/> 
      <Outlet></Outlet>
      <Footer/>
      
    </>
  )
}
