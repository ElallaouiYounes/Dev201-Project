import React from 'react'
import { PiDesktopTowerLight } from "react-icons/pi";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { IoLogoGameControllerB } from "react-icons/io";
import { PiGraphicsCardFill } from "react-icons/pi";
import { FaHeadset } from "react-icons/fa";

const Dropdown = () => {
    
  return (
    <div className='flex flex-col justify-center w-52 border border-gray-700 rounded-sm mt-3 bg-white relative'>

        <div className='flex flex-row items-center justify-between px-1 cursor-pointer hover:bg-gray-100 text-gray-800 h-10'>
            <div className='flex flex-row gap-2 items-center'>
            <PiDesktopTowerLight color='black' size={20} />
            <p>Desktops</p>
            </div>
            <RiArrowRightSLine  size={20}/>
        </div>

        <div className='flex flex-row items-center justify-between px-1 cursor-pointer hover:bg-gray-100 text-gray-800 h-10'>
            <div className='flex flex-row gap-2 items-center'>
            <MdLaptopMac color='black' size={20} />
            <p>Laptops</p>
            </div>
            <RiArrowRightSLine  size={20}/>
        </div>

        <div className='flex flex-row items-center justify-between px-1 cursor-pointer hover:bg-gray-100 text-gray-800 h-10'>
            <div className='flex flex-row gap-2 items-center'>
            <LuSmartphone color='black' size={20} />
            <p>Phones</p>
            </div>
            <RiArrowRightSLine  size={20}/>
        </div>

        <div className='flex flex-row items-center justify-between px-1 cursor-pointer hover:bg-gray-100 text-gray-800 h-10'>
            <div className='flex flex-row gap-2 items-center'>
            <IoLogoGameControllerB color='black' size={20} />
            <p>Games</p>
            </div>
            <RiArrowRightSLine  size={20}/>
        </div>

        <div className='flex flex-row items-center justify-between px-1 cursor-pointer hover:bg-gray-100 text-gray-800 h-10'>
            <div className='flex flex-row gap-2 items-center'>
            <PiGraphicsCardFill color='black' size={20} />
            <p>Components</p>
            </div>
            <RiArrowRightSLine  size={20}/>
        </div>

        <div className='flex flex-row items-center justify-between px-1 cursor-pointer hover:bg-gray-100 text-gray-800 h-10'>
            <div className='flex flex-row gap-2 items-center'>
            <FaHeadset color='black' size={20} />
            <p>Accessories</p>
            </div>
            <RiArrowRightSLine  size={20}/>
        </div>

    </div>
  )
}

export default Dropdown