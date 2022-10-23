import React from 'react'

const Nav = () => {
    let Links=[
        {name:"Home",link:"#home"},
        {name:"What We Do",link:"#whatwedo"}

    ];
  return (
    <div className='w-full fixed top-0 left-0'>
        <div className='md:flex py-4 md:px-10 px-7'>
            <div className=''>
             <img
             className='scale-90'
             src='/logo/vested_Navbarlogo.png'/>
            </div>
            <ul>
                {
                    Links.map((link)=>(
                        <li
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Nav