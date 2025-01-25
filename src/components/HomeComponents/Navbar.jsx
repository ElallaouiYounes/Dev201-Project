import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiHeart2Line, RiUserLine } from "react-icons/ri";
import { FaSearch, FaCannabis } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineSlack } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [ShowDropdown, setShowDropdown] = useState(false);
  // #D8514D
  // #40adb5
  const handleShow = () => {
    {
      ShowDropdown === false ? setShowDropdown(true) : setShowDropdown(false);
    }
  };
  return (
    <div className="Navbar-box text-white flex flex-wrap items-center px-6 border-b border-gray-500 pt-2 gap-4">
      {/* start first row */}
      <div className="w-[100%] flex justify-between">
        {/* start logo */}
        <div className="font-extrabold flex items-center justify-center gap-1 special-font cursor-pointer">
          <FaCannabis color="#333333" size={30} />
          <p className="text-3xl text-[#333333]">Lunzo</p>
        </div>
        {/* end logo */}

        {/* start searchBar */}
        <div className="mini-searchbar flex flex-row items-center bg-white rounded-sm px-2 py-1 gap-2 border border-gray-700 w-80 ">
          <FaSearch size={20} color="gray" className="w-[10%]" />
          <input
            type="text"
            className="w-[90%] border-none outline-none text-gray-800 text-md"
            placeholder="Search"
          />
        </div>
        {/* end searchBar */}

        {/* start cart & wishlist & user icons */}
        <div className="flex space-x-4 h-[100%]">
          <MdOutlineShoppingCart
            size={25}
            color="black"
            className="cursor-pointer"
          />
          <RiHeart2Line size={25} color="black" className="cursor-pointer" />
          <RiUserLine size={25} color="black" className="cursor-pointer" />
          <TiThMenuOutline
            size={25}
            color="black"
            className="cursor-pointer lg:hidden md:block sm:block"
          />
        </div>
        {/* end cart & wishlist & user icons */}
      </div>
      {/* end first row */}

      {/* start second row */}
      <div className="w-[100%] flex flex-row items-start">
        {/* start categories dropdown list   */}
        <div className="cat-row w-[33.3%]">
          {!ShowDropdown && (
            <div className="dropdown w-[100%] mb-1 mt-1" onClick={handleShow}>
              <div className="flex justify-between items-center border-2 gap-1 px-2 rounded-sm border-gray-700 cursor-pointer w-52">
                <TiThMenuOutline size={16} color="black" />
                <p className="text-black font-bold">All categories</p>
                <IoIosArrowDropdownCircle size={14} color="black" />
              </div>
            </div>
          )}

          {ShowDropdown && (
            <div className="w-[100%] mb-1 mt-1" onClick={handleShow}>
              <div className="flex items-center justify-start gap-1 cursor-pointer w-52">
                <IoCloseSharp size={26} color="#545454" className="mt" />
                <p className="text-[#545454] text-lg font-bold">Close</p>
              </div>
            </div>
          )}

          {ShowDropdown && <Dropdown />}
        </div>
        {/* end categories dropdown list */}

        {/* start links box */}
        <div className="box-links flex text-black justify-between items-center w-[33.3%] font-bold ">
          <p className="cursor-pointer">About us</p>
          <p className="cursor-pointer">Reviews</p>
          <p className="cursor-pointer">Get in touch</p>
        </div>
        {/* end links box */}

        {/* start searchBar */}
        <div className="big-searchbar flex flex-row items-center bg-white rounded-sm px-2 py-1 gap-2 border border-gray-700 w-dvw ">
          <FaSearch size={20} color="gray" />
          <input
            type="text"
            className="w-full border-none outline-none text-gray-800 text-md"
            placeholder="Search"
          />
        </div>
        {/* end searchBar */}
      </div>
      {/* end second row */}
    </div>
  );
};

export default Navbar;
