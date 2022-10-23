import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex-col'>
      <div>
        <img
        src='/logo/vested_Navbarlogo.png'/>
      </div>
      <div>
        <Link href="#home"
      </div>
    </div>
  )
}

export default Navbar