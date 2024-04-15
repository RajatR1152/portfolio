import React from 'react'

export default function Mobile({ img }) {
    return (
        <div className="container h-[500px] w-[270px] md:h-[600px] md:w-[310px] mx-auto mt-10 border border-l-2 py-2 border-r-4 border-l-[#6d6d6d] border-b-[#262525] border-t-[#292727] border-r-[#212020] bg-[#171313] p-1 rounded-[35px]">

            <div className="container p-0 w-full h-full mx-auto border border-l-4 border-r border-r-[#484747] border-t-0 border-l-[#1d1d1d] bg-[#000000] rounded-[30px]">

                <div className="container w-fit pb-[5px] relative px-3 z-10 bg-[#171313] gap-2 flex items-center justify-center rounded-b-xl border border-l-0 border-e-0 border-t-0 border-b-[#eee] mx-auto ">
                    <div className="container w-[12px] h-[12px] rounded-full bg-gradient-radial from-blue-700 via-black to-black"></div>
                    <div className="container w-[80px] h-[6px] rounded-full bg-gray-600"></div>
                </div>

                <img src={img} alt="" className="w-full relative -mt-4 h-full rounded-[30px]" />

            </div>

        </div>
    )
}
