import React from 'react'

const Objectives = () => {
  const Data = [
    {title:"Vision",desc:"To become the largest algo based hedge fund Globally"},
    {title:"Mission",desc:"To grow investors wealth by bringing the brightest minds together and enable them to function at optimal scale in the market"},
  ]
  return (
    <div className='flex flex-col md:flex-row justify-between py-5 px-10'>
        <div className='basis-1/2'>
              {
                Data.map((data)=>(
           <div className=' bg-[#7BE0B0] bg-opacity-50 rounded-lg mb-5'>
             <div className='flex flex-row p-5 lg:w-6/5'>
              <div className='pr-5 h-28 lg:h-48'>
                  <svg width="2" height="auto" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="4.37114e-08" x2="0.999993" y2="160" stroke="#12445B" stroke-width="2"/>
                  </svg>
              </div>
              <div className='lg:py-8'>
                <h1 className='text-3xl lg:text-4xl font-semibold font-garamond'>{data.title}</h1>
                <p className='font-montserrat text-lg lg:text-2xl py-2 italic'>{data.desc}</p>
              </div>
          </div>
        </div>
                ))
            }
             </div>
          <div className='flex flex-col'>
             <div className='px-2 py-5'>
                <h1 className='text-3xl lg:text-4xl font-semibold font-garamond py-3'>
                  Objective
                </h1>
                <svg width="auto" height="2" viewBox="0 0 589 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="589" y2="1" stroke="#5FC4B3" stroke-width="2"/>
                </svg>

             </div>
             <div className='flex flex-row align-middle'>
                <div className='pr-2 h-14'>
                  <svg width="24" height="auto" viewBox="0 0 24 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="22.4654" y1="0.320545" x2="1.46535" y2="96.3205" stroke="#5FC4B3" stroke-width="3"/>
                  </svg>
                </div>
                <div className='mt-5'>
                      <p 
                      className='text-xl'
                      >To Surpass the $10Bn boundary condition for a hedge fund</p>
                </div>
             </div>
          </div>

    </div>
  )
}

export default Objectives