import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <div className='grid  justify-items-strech py-10'>
            <div className='justify-self-start'>
            <svg className ="justify-self-start" width="120" height="85" viewBox="0 0 125 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-17" width="40" height="90" fill="#7BE0B0"/>
            <rect x="34" width="40" height="90" fill="#12445B"/>
            <rect x="85" width="40" height="90" fill="#7BE0B0"/>
            </svg>
            </div>
            <div className='justify-self-center'>
                <p className=' text-4xl md:text-8xl font-garamond pt-5 pb-5'>
                    <p>Investing in</p>
                    <p className='text-center'> the <span className='text-[#12445B] font-semibold'>future !</span></p>
                    </p>
                </div>
            <div className='justify-self-end'>
            <svg  width="128" height="90" viewBox="0 0 128 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="90" fill="#7BE0B0"/>
            <rect x="51" width="40" height="90" fill="#12445B"/>
            <rect x="102" width="40" height="90" fill="#7BE0B0"/>
            </svg>
            </div>
        </div>
        <div className='flex flex-row justify-evenly text-center text-md font-Montserrat md:text-2xl md:py-10'>
        <p>We do what we do.</p>
        <p>With extreme financial prudence.</p>
        <p>And Zen like mindfulness.</p>
        </div>
    </div>
  )
}

export default Hero