import React from 'react'

const Objectives = () => {
  const Data = [
    {title:"Vision",desc:"To become the largest algo based hedge fund Globally"},
  ];
  return (
    <div className='flex flex-col md:flex-row justify-center py-5 px-10 md:px-0'>
        <div>
          <div className='relative w-full bg-[#7BE0B0] bg-opacity-50 rounded-lg p-5 flex flex-row '>
              <div className='pr-5 h-28 lg:h-56'>
                  <svg width="2" height="auto" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="4.37114e-08" x2="0.999993" y2="160" stroke="#12445B" stroke-width="2"/>
                  </svg>
              </div>
              {
                Data.map((data)=>(
              <div>
                <h1 className='text-3xl font-semibold font-garamond'>{data.title}</h1>
                <p className='font-montserrat text-xl'>{data.desc}</p>
              </div>
                ))}
          </div>
        </div>
          <div>
              right
          </div>

    </div>
  )
}

export default Objectives