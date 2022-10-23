import React from 'react'
import Objective from './Objective'

const whyus = () => {
  return (
    <div>
        <div className='flex flex-col-reverse lg:flex-row-reverse justify-center lg:space-x-10 py-5 px-10 '>
      <div className='lg:px-10'>
            <div className=' bg-[#7BE0B0] bg-opacity-50 rounded-lg mb-5 '>
              <div className='flex flex-row p-5'>
                <div className='pr-8 h-28 lg:h-56 self-start'>
                  <svg width="2" height="auto" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="4.37114e-08" x2="0.999993" y2="160" stroke="#12445B" stroke-width="2" />
                  </svg>
                </div>
                <div className='lg:py-6 self-center'>
                  <h1 className='text-3xl lg:text-5xl font-semibold font-garamond'>Vested Risk Management Framework</h1>
                  <div className='font-montserrat text-lg lg:text-3xl py-2 italic font-normal'>
                    <ol className='pl-8 py-2'>
                        <li className='list-disc'>Strict and pre-defined trade management philosophy– Capital Deployment (70:30)</li>
                        <li className='list-disc'>SL level always for Black Swan events and erratic market movements</li>
                        <li className='list-disc'>Limited exposure to med-high risk trades (80:20 of the above 70%)</li>
                        <li className='list-disc'>Algorithm-based insights to reduce exposure to high-risk trades</li>
                        <li className='list-disc'>Fully hedged trades to reduce risk</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className='flex flex-col flex-auto'>
      <div className=''>
        <div className='px-2'>
        <h4 className='text-3xl md:text-5xl font-garamond font-semibold py-2 tracking-wider'>Objective</h4>
         <svg className="lg:w-96 w-56 lg:h-2" width="auto" height="2" viewBox="0 0 589 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="589" y2="1" stroke="#5FC4B3" strokeWidth="2" />
        </svg>
        </div>
        <div className='flex flex-col mt-5 space-y-5'>
          {
            Obj.map((obj) => (
              <div className='flex flex-row'>
                <div className='pr-2 h-16 lg:h-auto self-center'>
                  <svg width="24" height="auto" viewBox="0 0 24 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="22.4654" y1="0.320545" x2="1.46535" y2="96.3205" stroke="#5FC4B3" stroke-width="3" />
                  </svg>
                </div>
                <div className='self-center'>
                  <p className='text-xl lg:text-3xl italic'>{obj.desc}</p>
                </div>

              </div>
            ))
          }
        
        </div>
    </div>
      </div>
    </div>
    </div>
  )
}

export default whyus