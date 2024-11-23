import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div >
      <nav className='bg-primary p-9 p'>
        <div className="container flex  text-white items-center">
          <NavLink to="/home" className='text-4xl font-bold text-white '>Start Framework </NavLink>
          <div className='ml-auto space-x-6'>
            <ul className='flex gap-8'>
              <li>
                <NavLink to="/about" classname="hover:text-yellow-500">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portofolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav >
    </div>
  )
}
