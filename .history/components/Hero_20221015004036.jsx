import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col py-6 '>
      <div className='grid grid-flow-row   '>
        <div className='justify-self-start self-start w-24 md:w-32 '>
          <svg className="" width="auto" height="auto" viewBox="0 0 125 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-17" width="40" height="90" fill="#7BE0B0" />
            <rect x="34" width="40" height="90" fill="#12445B" />
            <rect x="85" width="40" height="90" fill="#7BE0B0" />
          </svg>
        </div>
        <div className='justify-self-center w-full py-5 md:py-10'>
          <span className=' text-6xl text-center lg:text-8xl font-garamond pt-5 pb-5'>
            <span className="block">Investing in</span>
            <span className="block">the <span className='text-[#12445B] font-semibold'>future !</span></span>
          </span>
        </div>
        <div className='justify-self-end self-end w-24 md:w-32'>
          <svg className='' width="auto" height="au" viewBox="0 0 128 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="90" fill="#7BE0B0" />
            <rect x="51" width="40" height="90" fill="#12445B" />
            <rect x="102" width="40" height="90" fill="#7BE0B0" />
          </svg>
        </div>
      </div>
      <div className='grid grid-row-3 md:grid-cols-3 justify-evenly text-center 
        text-xl font-Montserrat md:text-2xl md:py-10 p-5'>
        <div>
          <span>We do what we do.</span>
        </div>
        <div>
          <span>With extreme financial prudence.</span>
        </div>
        <div>
          <span>And Zen like mindfulness.</span>
        </div>
      </div>
    </div>
  )
}

export default Hero