import Link from 'next/link'
import React from 'react'
import {FiMenu} from 'react-icons/fi'

function Navbar() {
  return (
    <div className='flex flex-row justify-evenly pt-5'>
      <div className='flex'>
        <img
        className='scale-90'
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className='flex-col flexhidden md:visible md:text-xl md:font-Montserrat md:flex-row '>
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
      <div className='flex justify-evenly visible items-center mt-3 md:hidden'>
        <FiMenu size={40}/>
      </div>
    </div>
  )
}

export default Navbar