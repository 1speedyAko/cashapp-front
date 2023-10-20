import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useState } from "react";
import{ AiOutlineDashboard} from 'react-icons/ai'
import {GiReceiveMoney  } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { GiPayMoney} from "react-icons/gi";
import {AiOutlineUserAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import {HiOutlineLogin } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { BsBarChartLine } from "react-icons/Bs";
import {GrGallery } from "react-icons/gr";
import {FaPiggyBank } from "react-icons/fa";
import Income from '../cards/Income';
import Savings from '../cards/Savings';
import Transactions from '../cards/Transactions';
import Expense from '../cards/Expense';
import Chart from './Chart'






const Shop = () => {
  const[open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', icon: <AiOutlineDashboard /> },
    { title: 'Income', icon: <GiReceiveMoney /> },
    { title: 'Savings', icon: <FaPiggyBank /> },
    { title: 'Transactions', icon: <GrTransaction /> },
    { title: 'Expense', icon: <GiPayMoney /> },
    { title: 'SignUp', gap: true, icon: <AiOutlineUserAdd /> },
    { title: 'Login', icon: <BiLogIn /> },
    { title: 'Logout', icon: <HiOutlineLogin /> },
    { title: 'Charts', gap: true, icon: <BsBarChartLine /> },
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

    <div className='mt-10 w-full text-center' >
       <Chart/>
    </div>


    </div>
      
    </div>
  )
}

export default Shop