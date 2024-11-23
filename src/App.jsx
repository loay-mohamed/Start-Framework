import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import layout from './components/Layaout/Layout'
import Layout from './components/Layaout/Layout'


function App() {
  const router = createBrowserRouter([

    {
      path: "/", element: <Layout/>, children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> }

      ]
    },


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
