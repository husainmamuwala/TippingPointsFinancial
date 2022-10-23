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
    <div className='w-full sticky left-0 font-Montserrat font-[400] md:justify-evenly bg-white'>
        <div className='md:flex py-4 md:px-10 px-7 items-center md:justify-around md:gap-96'>
            <div className='pl-5 '>
                <svg width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="22" width="13" height="32" fill="#5FC4B3"/>
                <rect x="17" width="13" height="54" fill="#12445B"/>
                <rect x="34" y="14" width="13" height="40" fill="#5FC4B3"/>
                <rect x="51" y="29" width="13" height="25" fill="#12445B"/>
                <h2 className='font-Montserrat font-semibold'>VESTED</h2>
                </svg>
            </div>
            <div onClick={()=>setOpen(!open)} 
                 className='text-3xl absolute right-8 top-11 pr-8 cursor-pointer md:hidden'>
                    {!open ? <FiMenu size={40}/> : <AiOutlineClose size={40}/>}
            </div>
            
            <ul className={`md:flex md:flex-row md:items-center font-Montserrat pb-12 md:pb-0
            absolute md:static bg-white md:z-auto z-[-1] w-full left-0  md:pl-0 pl-9 md:w-auto
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