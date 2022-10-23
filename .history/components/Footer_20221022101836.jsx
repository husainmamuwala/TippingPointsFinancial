import React from 'react'
import Link from 'next/link';

const Footer = () => {
    const Links=[
        {name:"Home",Link:"/"},
        {name:"Investors",Link:"/investors"}
    ];
    return (
        <div>
            <footer
                className="flex flex-col md:flex-row md:justify-around bg-[#12445B] text-white py-6">
                <div className="grid grid-flow-row w-full">
                    <div className="justify-self-start self-start w-20 lg:w-32 ">
                        <svg width="auto" height="auto" viewBox="0 0 126 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-16" width="40" height="90" fill="#7BE0B0" />
                            <rect x="35" width="40" height="90" fill="white" />
                            <rect x="86" width="40" height="90" fill="#7BE0B0" />
                        </svg>
                    </div>
                    <div className="justify-self-center items-center self-center text-center flex flex-col md:flex-row pt-4">
                        <div className="w-28 lg:w-48 items-center">
                            <svg width="auto" height="auto" viewBox="0 0 229 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="11" y="69.1134" width="40.8397" height="100.529" fill="#7BE0B0" />
                                <rect x="64.4059" width="40.8397" height="169.642" fill="white" />
                                <rect x="117.812" y="43.9812" width="40.8397" height="125.661" fill="#7BE0B0" />
                                <rect x="171.217" y="91.104" width="40.8397" height="78.5379" fill="white" />
                                <path d="M34.0063 183.296L19.9903 218H14.1583L0.14225 183.296H5.32625C5.88625 183.296 6.34225 183.432 6.69425 183.704C7.04625 183.976 7.31025 184.328 7.48625 184.76L15.6703 205.928C15.9423 206.616 16.1983 207.376 16.4383 208.208C16.6943 209.024 16.9343 209.88 17.1583 210.776C17.3503 209.88 17.5583 209.024 17.7823 208.208C18.0063 207.376 18.2543 206.616 18.5263 205.928L26.6623 184.76C26.7903 184.392 27.0382 184.056 27.4062 183.752C27.7903 183.448 28.2543 183.296 28.7983 183.296H34.0063ZM53.6784 188.432V198.056H65.8224V203.024H53.6784V212.84H69.0864V218H47.1984V183.296H69.0864V188.432H53.6784ZM102.888 189.608C102.696 189.944 102.488 190.192 102.264 190.352C102.056 190.496 101.792 190.568 101.472 190.568C101.136 190.568 100.768 190.448 100.368 190.208C99.9837 189.952 99.5197 189.672 98.9757 189.368C98.4317 189.064 97.7917 188.792 97.0557 188.552C96.3357 188.296 95.4797 188.168 94.4877 188.168C93.5917 188.168 92.8077 188.28 92.1357 188.504C91.4637 188.712 90.8957 189.008 90.4317 189.392C89.9837 189.776 89.6477 190.24 89.4237 190.784C89.1997 191.312 89.0877 191.896 89.0877 192.536C89.0877 193.352 89.3117 194.032 89.7597 194.576C90.2237 195.12 90.8317 195.584 91.5837 195.968C92.3357 196.352 93.1917 196.696 94.1517 197C95.1117 197.304 96.0957 197.632 97.1037 197.984C98.1117 198.32 99.0957 198.72 100.056 199.184C101.016 199.632 101.872 200.208 102.624 200.912C103.376 201.6 103.976 202.448 104.424 203.456C104.888 204.464 105.12 205.688 105.12 207.128C105.12 208.696 104.848 210.168 104.304 211.544C103.776 212.904 102.992 214.096 101.952 215.12C100.928 216.128 99.6717 216.928 98.1837 217.52C96.6957 218.096 94.9917 218.384 93.0717 218.384C91.9677 218.384 90.8797 218.272 89.8077 218.048C88.7357 217.84 87.7037 217.536 86.7117 217.136C85.7357 216.736 84.8157 216.256 83.9517 215.696C83.0877 215.136 82.3197 214.512 81.6477 213.824L83.5437 210.728C83.7037 210.504 83.9117 210.32 84.1677 210.176C84.4237 210.016 84.6957 209.936 84.9837 209.936C85.3837 209.936 85.8157 210.104 86.2797 210.44C86.7437 210.76 87.2957 211.12 87.9357 211.52C88.5757 211.92 89.3197 212.288 90.1677 212.624C91.0317 212.944 92.0637 213.104 93.2637 213.104C95.1037 213.104 96.5277 212.672 97.5357 211.808C98.5437 210.928 99.0477 209.672 99.0477 208.04C99.0477 207.128 98.8157 206.384 98.3517 205.808C97.9037 205.232 97.3037 204.752 96.5517 204.368C95.7997 203.968 94.9437 203.632 93.9837 203.36C93.0237 203.088 92.0477 202.792 91.0557 202.472C90.0637 202.152 89.0877 201.768 88.1277 201.32C87.1677 200.872 86.3117 200.288 85.5597 199.568C84.8077 198.848 84.1997 197.952 83.7357 196.88C83.2877 195.792 83.0637 194.456 83.0637 192.872C83.0637 191.608 83.3117 190.376 83.8077 189.176C84.3197 187.976 85.0557 186.912 86.0157 185.984C86.9757 185.056 88.1597 184.312 89.5677 183.752C90.9757 183.192 92.5917 182.912 94.4157 182.912C96.4637 182.912 98.3517 183.232 100.08 183.872C101.808 184.512 103.28 185.408 104.496 186.56L102.888 189.608ZM144.592 188.6H134.128V218H127.672V188.6H117.208V183.296H144.592V188.6ZM165.213 188.432V198.056H177.357V203.024H165.213V212.84H180.621V218H158.733V183.296H180.621V188.432H165.213ZM226.758 200.648C226.758 203.192 226.334 205.528 225.486 207.656C224.638 209.784 223.446 211.616 221.91 213.152C220.374 214.688 218.526 215.88 216.366 216.728C214.206 217.576 211.806 218 209.166 218H195.942V183.296H209.166C211.806 183.296 214.206 183.728 216.366 184.592C218.526 185.44 220.374 186.632 221.91 188.168C223.446 189.688 224.638 191.512 225.486 193.64C226.334 195.768 226.758 198.104 226.758 200.648ZM220.134 200.648C220.134 198.744 219.878 197.04 219.366 195.536C218.87 194.016 218.142 192.736 217.182 191.696C216.238 190.64 215.086 189.832 213.726 189.272C212.382 188.712 210.862 188.432 209.166 188.432H202.422V212.864H209.166C210.862 212.864 212.382 212.584 213.726 212.024C215.086 211.464 216.238 210.664 217.182 209.624C218.142 208.568 218.87 207.288 219.366 205.784C219.878 204.264 220.134 202.552 220.134 200.648Z" fill="white" />
                            </svg>
                        </div>

                        <div className="text-center px-5 md:text-left">
                            <h1 className="font-montserrat font-bold text-2xl lg:text-4xl">Vestidify Finance & Capital Pvt Ltd</h1>
                    
                            <h1 className="font-montserrat font-medium text-xl lg:text-xl py-2">Investing in the Future</h1>
           
                            <a href="mailto:invest@vestify.com" 
                            className="font-montserrat font-normal text-xl lg:text-xl">invest@vestidify.com</a>
                    
                            <div className="space-x-5 py-4 text-lg lg:text-xl">
                            {
                                Links.map((l)=>(
                                <Link href={l.Link} className="font-montserrat">{l.name}</Link>
                                ))
                            }
                            </div>
                        </div>
                        
                    </div>
                    <div className="justify-self-end self-end w-20 lg:w-32">
                        <svg width="auto" height="auto" viewBox="0 0 127 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="90" fill="#7BE0B0" />
                            <rect x="51" width="40" height="90" fill="white" />
                            <rect x="102" width="40" height="90" fill="#7BE0B0" />
                        </svg>

                    </div>
                    <a
                            href="https://elightlabs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#7BE0B0] text-sm text-center pt-5"
                        >
                            Elightlabs Technologies LLP.
                        </a>
                </div>




            </footer>
        </div>
    )
}

export default Footer