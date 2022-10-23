import React from 'react'
import Link from 'next/link';

const Footer = () => {
    const Links=[
        {name:"Home",link:"/"},
        {name:"What We Do",link:"#whatwedo"},
        {name:"Objectives",link:"#objectives"},
        {name:"Why Us ?",link:"#whyus"},
        {name:"Investors",link:"/investors"},
    ];
  return (
    <div>
        <footer
            className="flex flex-col items-center my-8 lg:my-12 gap-y-6
        md:flex-row md:justify-around"
        >
            <nav
                className="flex flex-col text-center gap-y-4 uppercase 
            items-center justify-center text-[#B4ABAB] font-semibold text-sm
            md:flex-row md:w-2/5  "
            >
                {Links.map((n) => (
                    <Link href={n.link} key={n.link}>
                        <a className="w-full md:w-max mx-2 lg:mx-4 xl:mx-6 hover:text-primary transition-all ">
                            {n.name}
                        </a>
                    </Link>
                ))}
            </nav>
            
            <span className="text-center md:w-2/5">
                <span className="text-primary">
                    © Annamaya Bar and Restraunt
                </span>{" "}
                <br />
                <a
                    href="https://elightlabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B4ABAB] hover:text-white"
                >
                    ElightlabsTechnologies LLP.
                </a>
            </span>
        </footer>
    </div>
  )
}

export default Footer