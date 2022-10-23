import React from 'react'
import Objective from './Objective'

const whyus = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-center lg:space-x-10 py-5 px-10'>
      <div className='lg:px-10'>
            <div className=' bg-[#7BE0B0] bg-opacity-50 rounded-lg mb-5 '>
              <div className='flex flex-row p-5'>
                <div className='pr-10 h-28 lg:h-44 self-center'>
                  <svg width="2" height="auto" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="4.37114e-08" x2="0.999993" y2="160" stroke="#12445B" stroke-width="2" />
                  </svg>
                </div>
                <div className='lg:py-8 self-center'>
                  <h1 className='text-3xl lg:text-5xl font-semibold font-garamond'>Vested Risk Management Framework</h1>
                  <div className='font-montserrat text-lg lg:text-3xl py-2 italic'>
                    <ol>
                        <li className='list-disc light'>hello</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className='flex flex-col flex-auto'>
        <Objective />
      </div>
    </div>
  )
}
    </div>
  )
}

export default whyus