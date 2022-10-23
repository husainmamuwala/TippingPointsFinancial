import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row p-5 lg:pl-24'>
      <div className='flex'>
        <img
        className='scale-90'
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className='flex-row text-2xl pl-20'>
        <Link href="#home">
          <button className='p'>Home</button>
        </Link>
        <Link href="#home">
          <button className='text'>Home</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar