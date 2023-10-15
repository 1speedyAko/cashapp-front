import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useState } from "react";
import{ RiAccountCircleLine} from 'react-icons/ri'
import {BsBagCheck  } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { GrUserSettings} from "react-icons/gr";
import {AiOutlineUserAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import {HiOutlineLogin } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import {GrGallery } from "react-icons/gr";
import {BsHeart } from "react-icons/bs";
import Income from '../cards/Income';
import Savings from '../cards/Savings';
import Transactions from '../cards/Transactions';
import Expense from '../cards/Expense';






const Shop = () => {
  const[open, setOpen] = useState(true)
  const Menus = [
    { title: 'Account', icon: <RiAccountCircleLine /> },
    { title: 'Orders', icon: <BsBagCheck /> },
    { title: 'Saved Items', icon: <BsHeart /> },
    { title: 'Recently viewed', icon: <GiBackwardTime /> },
    { title: 'Setting', icon: <GrUserSettings /> },
    { title: 'SignUp', gap: true, icon: <AiOutlineUserAdd /> },
    { title: 'Login', icon: <BiLogIn /> },
    { title: 'Logout', icon: <HiOutlineLogin /> },
    { title: 'home', gap: true, icon: <AiOutlineHome /> },
    { title: 'About', icon: <FcAbout /> },
    { title: 'Gallery', icon: <GrGallery /> },
  ];

  
  return (
    <div className='flex bg-gray-200 md:bg-gray-200 w-full md:w-full'>
      <div
       className={`${open ? "w-72": "w-20"}
        duration-300 lg:z-10  p-5 pt-8 bg-sky-300 relative`}>
      <AiOutlineArrowLeft 
      className={`absolute cursor-pointer -right-3 
      rounded-full top-9 w-7 border-2 border-gray-700 ${!open && 'rotate-180'}`}
      onClick={()=>setOpen(!open)}
      />

    <div className='flex gap-x-4 items-center'>
      <img
       src=''
       className={`cursor-pointer duration-400`}
      />
      <h1 className={`text-black orign-left font-medium text-xl duration-300 
      ${!open && 'scale-0'}`}>logo westk9</h1>
    </div>
    <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon /* Render the icon */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
    </div>
    <div className='p-7 text-2xl font-semibold bg-gray-200 w-full md:w-full'>
      <div className='flex grid flex-wrap justify-center gap-6  md:grid-cols-2  lg:grid lg:grid-cols-4 lg:gap-10 px-4'>
        <div className='w-full lg:w-full'>
          <Income />
        </div>
        <div className='w-full lg:w-full'>
          <Savings />
        </div>
        <div className='w-full lg:w-full'>
          <Transactions />
        </div>
        <div className='w-full lg:w-full'>
          <Expense />
        </div>
      </div>


    </div>
      
    </div>
  )
}

export default Shop