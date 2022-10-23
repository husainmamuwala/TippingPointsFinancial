import React from 'react'

const Objective = () => {
    const Obj = [
        { desc: "To Surpass the $10Bn boundary condition for a hedge fund" },
        { desc: "To become a flag bearer of the Derivatives market in India with the help of sophisticated technology" },
        { desc: "To be a dominant global hedge fund in the upcoming decade" },
    
      ]
  return (
    <div>
        <div className='px-2'>
          <h1 className='text-3xl lg:text-4xl font-semibold font-garamond py-3'>
            Objective
          </h1>
          <svg className='mb-5 lg:w-' width="auto" height="2" viewBox="0 0 589 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="589" y2="1" stroke="#5FC4B3" stroke-width="2" />
          </svg>

        </div>
        <div className='flex flex-col space-y-5'>
          {
            Obj.map((obj) => (
              <div className='flex flex-row'>
                <div className='pr-2 h-16 lg:h-auto self-center'>
                  <svg width="24" height="auto" viewBox="0 0 24 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="22.4654" y1="0.320545" x2="1.46535" y2="96.3205" stroke="#5FC4B3" stroke-width="3" />
                  </svg>
                </div>
                <div className='self-center'>
                  <p className='text-xl lg:text-2xl'>{obj.desc}</p>
                </div>

              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Objective