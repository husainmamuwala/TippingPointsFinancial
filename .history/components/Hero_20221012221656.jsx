import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <div className='grid grid-flow-col py-10'>
            <div className='justify-self-start'>
            <svg className ="justify-self-start" width="120" height="85" viewBox="0 0 125 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-17" width="40" height="90" fill="#7BE0B0"/>
            <rect x="34" width="40" height="90" fill="#12445B"/>
            <rect x="85" width="40" height="90" fill="#7BE0B0"/>
            </svg>
            </div>
            <div className='absolute top-44 z-[-1] justify-self-center py-10'>
                <h className=' text-5xl text-center lg:text-8xl font-garamond pt-5 pb-5'>
                    <h4>Investing in</h4>
                    <h4> the <span className='text-[#12445B] font-semibold'>future !</span></h4>
                    </h>
                </div>
            <div className='justify-self-end pt-56'>
            <svg className='' width="128" height="90"  viewBox="0 0 128 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="90" fill="#7BE0B0"/>
            <rect x="51" width="40" height="90" fill="#12445B"/>
            <rect x="102" width="40" height="90" fill="#7BE0B0"/>
            </svg>
            </div>
        </div>
        <div className='grid grid-row-3 md:grid-cols-3 justify-evenly text-center 
        text-xl font-Montserrat md:text-2xl md:py-10 p-5 '>
          <div>
          <h4>We do what we do.</h4>
          </div>
          <div>
          <h4>With extreme financial prudence.</h4>
          </div>
          <div>
          <h4>And Zen like mindfulness.</h4>
          </div>
        </div>
    </div>
  )
}

export default Hero