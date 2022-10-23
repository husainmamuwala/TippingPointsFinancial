import Link from 'next/link'
import React from 'react'
import {} from 'react-icons'

function Navbar() {
  return (
    <div className='flex flex-row justify-evenly pt-5'>
      <div className='flex'>
        <img
        className='scale-90'
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className='flex-col lg:text-xl lg:font-Montserrat lg:flex-row '>
        <Link href="#home">
          <button className='p-5 tracking-wide'>Home</button>
        </Link>
        <Link href="#home">
          <button className='p-5 tracking-wide'>What We Do</button>
        </Link>
        <Link href="#home">
          <button className='p-5 tracking-wide'>Objectives</button>
        </Link>
        <Link href="#home">
          <button className='p-5 tracking-wide'>Why Us ?</button>
        </Link>
        <Link href="#home">
          <button className='p-5 tracking-wide'>Investors</button>
        </Link>
      </div>
      <div className='flex justify-end visible md:hidden'>
        
      </div>
    </div>
  )
}

export default Navbar