import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row'>
            <svg className ="tran"width="120" height="85" viewBox="0 0 125 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-17" width="40" height="90" fill="#7BE0B0"/>
            <rect x="34" width="40" height="90" fill="#12445B"/>
            <rect x="85" width="40" height="90" fill="#7BE0B0"/>
            </svg>
        </div>
        <div className='flex flex-row justify-evenly'>
        <p>bottom</p>
        <p>bottom</p>
        <p>bottom</p>
        </div>
    </div>
  )
}

export default Hero