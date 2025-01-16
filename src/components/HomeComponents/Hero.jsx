import React from 'react'
import heroBanner from '../../../public/images/hero-banner.png'

const Hero = () => {
  // #D8514D
  // #40adb5
  return (
    <div className='flex items-center justify-between bg-[#40adb5] w-full h-[400px]'>
        <div className='w-[50%] pl-10'>
            <p className='text-5xl font-extrabold text-white'>Power Your Passion with the Latest Tech!</p>

            <p className='text-white font-medium'>Explore our premium selection of laptops, desktops, gaming rigs, accessories, and more.
            Get the performance you need to work, play, and create. Shop now for unbeatable deals!</p>

            <p className='bg-black text-white font-bold w-36 text-center py-2 rounded mt-4 cursor-pointer'>Explore now</p>
        </div>
        <div className='mt-28 mr-6'>
            <img src={heroBanner} alt="" className='h-[500px]'/>
        </div>
    </div>
  )
}

export default Hero