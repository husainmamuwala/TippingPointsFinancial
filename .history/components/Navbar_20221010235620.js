import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex-col'>
      <div>
        <img
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div className=''>
        <Link href="#home">
          <button className='text'>Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar