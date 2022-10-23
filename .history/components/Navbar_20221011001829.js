import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row lg:pl-24'>
      <div className='flex'>
        <img
        className='scale-90'
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className='flex flex-row text-xl'>
        <Link href="#home">
          <button className='p-5'>Home</button>
        </Link>
        <Link href="#home">
          <button className='p-5'>What We Do</button>
        </Link>
        <Link href="#home">
          <button className='p-5'>Objectives</button>
        </Link>
        <Link href="#home">
          <button className='p-5'>Why Us ?</button>
        </Link>
        <Link href="#home">
          <button className='p-5'>Investors</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar