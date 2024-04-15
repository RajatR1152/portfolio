'use client'
import React, { useContext } from 'react'
import Navs from './Navs'
import { FaBars } from 'react-icons/fa'
import { DataContext } from '@/context/DataContext';

export default function Header() {

    const { SetShowSideBar } = useContext(DataContext);

    return (
        <div className="container z-10 absolute p-0 w-full flex gap-5 items-center">
            <FaBars onClick={() => { SetShowSideBar(true) }} size={25} className='md:hidden ms-5 cursor-pointer' />
            <div className="container w-full md:w-fit flex md:ms-40 p-5 md:mt-10 items-start md:items-center md:justify-center">
                <h1 className="logo md:text-[140px] text-[70px] md:block hidden absolute text-[#242323] text-center">Rajat</h1>
                <h1 className="text-3xl md:text-4xl w-full font-bold md:absolute md:text-red-500 text-center">Rajat R1152</h1>
            </div>
            <div className="container md:block hidden">
                <Navs />
            </div>
        </div>
    )
}
