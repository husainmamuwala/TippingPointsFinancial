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
        <Link href="#home">
          <button className=''
        </Link>
      </div>
    </div>
  )
}

export default Navbar