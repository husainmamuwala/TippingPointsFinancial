import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row'>
      <div className='flex'>
        <img
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className='flex-row'>
        <Link href="#home">
          <button className='text'>Home</button>
        </Link>
        <Link href="#home">
          <button className='text'>Home</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar