import React from 'react'
import Objective from './Objective'

const Cards = () => {
  const Data = [
    { title: "Vision", desc: "To become the largest algo based hedge fund Globally" },
    { title: "Mission", desc: "To grow investors wealth by bringing the brightest minds together and enable them to function at optimal scale in the market" },
  ]
  
  return (
    <div className='flex flex-row justify-center py-5 px-5'>
      <div className='md:w-2/6'>
        {
          Data.map((data) => (
            <div className=' bg-[#7BE0B0] bg-opacity-50 rounded-lg mb-5 md:w-[95%]'>
              <div className='flex flex-row p-5'>
                <div className='pr-5 h-28 lg:h-38 self-center'>
                  <svg width="2" height="auto" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="4.37114e-08" x2="0.999993" y2="160" stroke="#12445B" stroke-width="2" />
                  </svg>
                </div>
                <div className='lg:py-8 self-center'>
                  <h1 className='text-3xl lg:text-4xl font-semibold font-garamond'>{data.title}</h1>
                  <p className='font-montserrat text-lg lg:text-2xl py-2 italic'>{data.desc}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col basis-1/4'>
        <Objective/>
      </div>

    </div>
  )
}

export default Cards