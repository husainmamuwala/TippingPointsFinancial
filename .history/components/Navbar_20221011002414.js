import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row justify-evenly pt-5'>
      <div className='flex'>
        <img
        className='scale-90'
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className='flex flex-col justify-end lg:text-xl'>
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
    </div>
  )
}

export default Navbar