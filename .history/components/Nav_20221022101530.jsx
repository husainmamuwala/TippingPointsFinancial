import Link from 'next/link';
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const Links=[
        {name:"Home",link:"/"},
        {name:"What We Do",link:"#whatwedo"},
        {name:"Objectives",link:"#objectives"},
        {name:"Why Us ?",link:"#whyus"},
        {name:"Investors",link:"/investors"},
    ];
    const [open,setOpen] = useState(false);
  return (
    <div className='w-full top-0 font-Montserrat font-[400] bg-white sticky z-10'>
        <div className='lg:flex py-4 lg:px-10 items-center lg:justify-around'>
            <div className='mt-2 scale-75 md:scale-100'>
                <a href='/'>
                <svg width="221" height="60" viewBox="0 0 221 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M110.63 25.972L100.118 52H95.7437L85.2317 25.972H89.1197C89.5397 25.972 89.8817 26.074 90.1457 26.278C90.4097 26.482 90.6077 26.746 90.7397 27.07L96.8777 42.946C97.0817 43.462 97.2737 44.032 97.4537 44.656C97.6457 45.268 97.8257 45.91 97.9937 46.582C98.1377 45.91 98.2937 45.268 98.4617 44.656C98.6297 44.032 98.8157 43.462 99.0197 42.946L105.122 27.07C105.218 26.794 105.404 26.542 105.68 26.314C105.968 26.086 106.316 25.972 106.724 25.972H110.63ZM118.184 29.824V37.042H127.292V40.768H118.184V48.13H129.74V52H113.324V25.972H129.74V29.824H118.184ZM147.891 30.706C147.747 30.958 147.591 31.144 147.423 31.264C147.267 31.372 147.069 31.426 146.829 31.426C146.577 31.426 146.301 31.336 146.001 31.156C145.713 30.964 145.365 30.754 144.957 30.526C144.549 30.298 144.069 30.094 143.517 29.914C142.977 29.722 142.335 29.626 141.591 29.626C140.919 29.626 140.331 29.71 139.827 29.878C139.323 30.034 138.897 30.256 138.549 30.544C138.213 30.832 137.961 31.18 137.793 31.588C137.625 31.984 137.541 32.422 137.541 32.902C137.541 33.514 137.709 34.024 138.045 34.432C138.393 34.84 138.849 35.188 139.413 35.476C139.977 35.764 140.619 36.022 141.339 36.25C142.059 36.478 142.797 36.724 143.553 36.988C144.309 37.24 145.047 37.54 145.767 37.888C146.487 38.224 147.129 38.656 147.693 39.184C148.257 39.7 148.707 40.336 149.043 41.092C149.391 41.848 149.565 42.766 149.565 43.846C149.565 45.022 149.361 46.126 148.953 47.158C148.557 48.178 147.969 49.072 147.189 49.84C146.421 50.596 145.479 51.196 144.363 51.64C143.247 52.072 141.969 52.288 140.529 52.288C139.701 52.288 138.885 52.204 138.081 52.036C137.277 51.88 136.503 51.652 135.759 51.352C135.027 51.052 134.337 50.692 133.689 50.272C133.041 49.852 132.465 49.384 131.961 48.868L133.383 46.546C133.503 46.378 133.659 46.24 133.851 46.132C134.043 46.012 134.247 45.952 134.463 45.952C134.763 45.952 135.087 46.078 135.435 46.33C135.783 46.57 136.197 46.84 136.677 47.14C137.157 47.44 137.715 47.716 138.351 47.968C138.999 48.208 139.773 48.328 140.673 48.328C142.053 48.328 143.121 48.004 143.877 47.356C144.633 46.696 145.011 45.754 145.011 44.53C145.011 43.846 144.837 43.288 144.489 42.856C144.153 42.424 143.703 42.064 143.139 41.776C142.575 41.476 141.933 41.224 141.213 41.02C140.493 40.816 139.761 40.594 139.017 40.354C138.273 40.114 137.541 39.826 136.821 39.49C136.101 39.154 135.459 38.716 134.895 38.176C134.331 37.636 133.875 36.964 133.527 36.16C133.191 35.344 133.023 34.342 133.023 33.154C133.023 32.206 133.209 31.282 133.581 30.382C133.965 29.482 134.517 28.684 135.237 27.988C135.957 27.292 136.845 26.734 137.901 26.314C138.957 25.894 140.169 25.684 141.537 25.684C143.073 25.684 144.489 25.924 145.785 26.404C147.081 26.884 148.185 27.556 149.097 28.42L147.891 30.706ZM171.969 29.95H164.121V52H159.279V29.95H151.431V25.972H171.969V29.95ZM180.235 29.824V37.042H189.343V40.768H180.235V48.13H191.791V52H175.375V25.972H191.791V29.824H180.235ZM219.194 38.986C219.194 40.894 218.876 42.646 218.24 44.242C217.604 45.838 216.71 47.212 215.558 48.364C214.406 49.516 213.02 50.41 211.4 51.046C209.78 51.682 207.98 52 206 52H196.082V25.972H206C207.98 25.972 209.78 26.296 211.4 26.944C213.02 27.58 214.406 28.474 215.558 29.626C216.71 30.766 217.604 32.134 218.24 33.73C218.876 35.326 219.194 37.078 219.194 38.986ZM214.226 38.986C214.226 37.558 214.034 36.28 213.65 35.152C213.278 34.012 212.732 33.052 212.012 32.272C211.304 31.48 210.44 30.874 209.42 30.454C208.412 30.034 207.272 29.824 206 29.824H200.942V48.148H206C207.272 48.148 208.412 47.938 209.42 47.518C210.44 47.098 211.304 46.498 212.012 45.718C212.732 44.926 213.278 43.966 213.65 42.838C214.034 41.698 214.226 40.414 214.226 38.986Z" fill="black"/>
                <rect y="24.4445" width="14.4444" height="35.5556" fill="#5FC4B3"/>
                <rect x="18.8889" width="14.4444" height="60" fill="#12445B"/>
                <rect x="37.7778" y="15.5555" width="14.4444" height="44.4444" fill="#5FC4B3"/>
                <rect x="56.6667" y="32.2222" width="14.4444" height="27.7778" fill="#12445B"/>
                </svg>
                </a>

            </div>
            <div onClick={()=>setOpen(!open)}
                 className='text-3xl absolute right-8 top-11 pr-8 cursor-pointer lg:hidden '>
                    
                    {!open ? <FiMenu size={40}/> : <AiOutlineClose size={40}/>}
            </div>
            
            <ul className={`lg:flex lg:flex-row lg:items-center font-Montserrat pb-12 lg:pb-0
            absolute lg:static bg-white lg:z-auto z-[-1] w-full left-0  lg:pl-0 pl-9 lg:w-auto
            transition-all duration-500 ease-in 
            ${open ? "flex-col" : "hidden"}`}>
                {
                    Links.map((link)=>(
                        <li onClick={() => setOpen(false)} key={link.link} className="md:ml-8 text-xl my-7 hover:text-[#5FC4B3]
                         relative transition-all hover:top-1">
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