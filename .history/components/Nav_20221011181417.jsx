import Link from 'next/link';
import React from 'react'

const Nav = () => {
    let Links=[
        {name:"Home",link:"#home"},
        {name:"What We Do",link:"#whatwedo"},
        {name:"Objectives",link:"#objectives"},
        {name:"Why Us ?",link:"#whyus"},
        {name:"Investors",link:"/investors"},



    ];
  return (
    <div className='w-full fixed top-0 left-0 font-Montserrat'>
        <div className='md:flex py-4 md:px-10 px-7 items-center justify-between'>
            <div className='font-Montserrat'>
             <img
             className='scale-90'
             src='/logo/vested_Navbarlogo.png'/>
            </div>
            <ul className='md:flex md:flex-row md:items-center font-Montserrat '>
                {
                    Links.map((link)=>(
                        <li key>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Nav