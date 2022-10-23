import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer
                className="flex flex-col md:flex-row md:justify-around bg-[#12445B] text-white py-6">
                    <div className="grid grid-flow-col w-full">
                <div className="justify-self-start">
                    <svg width="126" height="90" viewBox="0 0 126 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-16" width="40" height="90" fill="#7BE0B0" />
                        <rect x="35" width="40" height="90" fill="white" />
                        <rect x="86" width="40" height="90" fill="#7BE0B0" />
                    </svg>
                </div>
                <div>2</div>
                <div>
                <svg width="127" height="90" viewBox="0 0 127 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="90" fill="#7BE0B0"/>
<rect x="51" width="40" height="90" fill="white"/>
<rect x="102" width="40" height="90" fill="#7BE0B0"/>
</svg>

                </div>
                    </div>



                {/* <span className="text-center md:w-2/5">
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
                </span> */}
            </footer>
        </div>
    )
}

export default Footer