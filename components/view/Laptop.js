import React from 'react'

export default function Laptop({ img }) {

    return (
        <div>
            <div className="container w-full hidden md:flex flex-col items-center justify-center h-screen">


                <div className="container md:w-7/12 h-[38%] border-2 border-black border-t-2 border-t-[#353434] border-l-2 border-l-[#242424] border-r-[#151515] rounded-t-[25px] bg-[#1a1818] p-1">

                    <div className="container w-full h-full rounded-[25px] bg-black">
                        <img src={img} alt="GTr" className="w-full h-full rounded-[25px]" />
                    </div>

                </div>

                <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} className="container w-full h-[40px] translate-z-8 rounded-lg border-t-4 border-2 border-[#383737] border-t-[#282424ee] bg-[#1a1818] p-2">

                    <div className="container relative w-8/12 mx-auto columns-11 -mt-5">
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                    </div>

                    <div className="container relative w-8/12 mx-auto columns-12 -mt-6">
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                        <div style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 35%, 0 36%)' }} className="container w-full h-1/5 bg-black p-5"></div>
                    </div>

                </div>

                <div className="container w-full h-[20px] rounded-b-[55%] bg-[#2c2727]"></div>

            </div>


            <div className="md:hidden block">
                <img src={img} alt="GTr" className="w-full my-10 h-full rounded-[25px]" />
            </div>

        </div>
    )
}
