'use client'
import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Navs from './Navs'
import { DataContext } from '@/context/DataContext'

export default function Sidebar() {

    const { showSideBar, SetShowSideBar } = useContext(DataContext);


    return (
        <div className={showSideBar ? "container w-10/12 md:hidden flex flex-col gap-10 absolute h-full p-5 bg-[#151414] z-20" : 'hidden'}>

            <RxCross2 onClick={()=>{SetShowSideBar(false)}} size={30} className='ms-auto' />

            <Navs />

        </div>
    )
}
