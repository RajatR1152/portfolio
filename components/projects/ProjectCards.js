'use client'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function ProjectCards({ data, key }) {

    function limitDescription(description, limit) {
        const words = description.split(' ');

        const limitedDescription = words.slice(0, limit).join(' ');

        return limitedDescription;
    }

    return (
        <div key={key} className="container w-full p-5 h-fit">
            <div className="container w-full rounded-lg border shadow-lg shadow-[#3e3b3b77] border-[#4b4a4a] h-full">
                <Link href={`/project/${data?.name}`}>
                    <img src={data?.imgs[3]} alt="" className="w-full rounded-t-lg h-[80%]" />
                </Link>
                <div className="container w-full h-fit md:h-[150px] flex flex-col gap-3 p-3 rounded-b-lg bg-[#202020]">
                    <h1 className="text-2xl font-semibold text-white">{data?.name}</h1>
                    <div className="container w-full flex md:flex-row flex-col gap-4">
                        <h1 className="text-md text-white">{limitDescription(data?.description, 20)} . . . .</h1>
                        <Link className='w-fit ms-auto' href={`/project/${data?.name}`}><MdKeyboardDoubleArrowRight size={30} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
