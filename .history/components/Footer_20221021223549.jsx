import React from 'react'
import Link from 'next/link';

const Footer = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "What We Do", link: "#whatwedo" },
        { name: "Objectives", link: "#objectives" },
        { name: "Why Us ?", link: "#whyus" },
        { name: "Investors", link: "/investors" },
    ];
    return (
        <div>
            <footer
                className="flex flex-col
        md:flex-row md:justify-around bg-[#12445B] h-full"
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
                        © Tipping Points 2022
                    </span>
                    <br />
                    <a
                        href="https://elightlabs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#7BE0B0]"
                    >
                        ElightlabsTechnologies LLP.
                    </a>
                </span>
            </footer>
        </div>
    )
}

export default Footer