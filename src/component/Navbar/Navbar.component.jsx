import React from "react";
import { BiChevronDown, BiMenu, BiSearch, IconName } from "react-icons/bi";
function Navsm() {
  return <>
    <div className="text-white flex items-center justify-between  ">
      <div>
        <h3 className="text-xl font-bold">It all starts here!</h3>
        <span className="text-gray-400 text-xs flex item-center cursor-pointer hover:text-white">
          Delhi NCR <BiChevronDown /></span>
      
      </div>
      <div className="w-8 h-8">
        < BiSearch className="w-full h-full" />
      </div> 
    </div>
  </>
  
}
function Navmd() {
  return <>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input type="search" className="w-full bg-transparent border-none focus:outline-none"/>
    </div>
  </>
  
}
function Navlg() {
  return <>
    <div className=" container flex mx-auto items-center gap-3 bg-white px-4 justify-between">
      <div className="flex-items-center w-1/2 gap-3">
        <div className="w-10 h-10">
          <img
            src="https://play-lh.googleusercontent.com/I8M0mhb7fcRfTi22XzLfeFeIcj3tiKMCQNH4YFPjqkQA8mEakWuaQrDKELo0ISuTZg"
            alt="logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-full  flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input type="search" className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies,events,plays,sports and activities" />
          
          </div>
         </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white ">Nepali NCR
        
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">sign in</button>
          <button className="w-8 h-8 text-white"><BiMenu className="w-full h-full" /></button>
        
        </span>
      </div>
      
 
    </div>
  </>
  
}



//main component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* this is for mobile screen navbar */}
      <div className="md:hidden">
        <Navsm/>
      </div>
      {/* this is for median/tab screen navbar */}
      <div className="hidden md:flex lg:hidden">
        <Navmd/>
      </div>
      {/* this is for large screen navbar */}
      <div className="hidden md:hidden lg:flex">
        <Navlg/>
      </div>
    </nav>
  )
};

export default Navbar;