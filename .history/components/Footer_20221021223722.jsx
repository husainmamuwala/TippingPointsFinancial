import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer
                className="flex flex-col md:flex-row md:justify-around bg-[#12445B]">
                    <div></div>
                

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