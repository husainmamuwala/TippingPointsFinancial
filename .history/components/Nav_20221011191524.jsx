import Link from 'next/link';
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'



const Nav = () => {
    const Links=[
        {name:"Home",link:"#home"},
        {name:"What We Do",link:"#whatwedo"},
        {name:"Objectives",link:"#objectives"},
        {name:"Why Us ?",link:"#whyus"},
        {name:"Investors",link:"/investors"},
    ];
    const [open,setOpen] = useState(false);
  return (
    <div className='w-full fixed top-0 left-0 font-Montserrat md:justify-evenly bg-white'>
        <div className='md:flex py-4 md:px-10 px-7 items-center justify-between'>
            <div className='pl-5 '>
             <img
             className='scale-90'
             src='/logo/vested_Navbarlogo.png'/>
            </div>
            <div onClick={()=>setOpen(!open)} 
                 className='text-3xl absolute right-8 top-11 pr-8 cursor-pointer md:hidden'>
                    {!open ? <}
            </div>
            
            <ul className={`md:flex md:flex-row md:items-center font-Montserrat pb-12 md:pb-0
            absolute md:static bg-white md:z-auto z-[-1] w-full left-0 md:pl-0 pl-9 md:w-auto
            transition-all duration-500 ease-in ${open ? "flex-col" : "hidden"}`}>
                {
                    Links.map((link)=>(
                        <li key={link.link} className="md:ml-8 text-xl my-7 ">
                            <Link href={link.link}
                            className="font-Monteserrat">
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Nav