import React from 'react'

export default function HeroImg() {
    return (
        <>
            <div className="conainer md:block hidden md:mt-0 mt-20 w-full">
                <img data-aos="fade-up-left" src="https://th.bing.com/th/id/R.36716d566e06af75bc4e037857e6ef1b?rik=1klZKnRGhMdfyA&pid=ImgRaw&r=0" className='md:h-[770px] h-[400px] mx-auto w-full md:w-auto' alt="" />
                <div className="absolute w-full flex md:flex-row flex-col inset-0 bg-gradient-to-b p-0 from-transparent to-[#020101] bg-opacity-20">
                </div>
            </div>
            <div className="conainer md:hidden block md:mt-0 mt-20 w-full">
                <img src="https://th.bing.com/th/id/R.36716d566e06af75bc4e037857e6ef1b?rik=1klZKnRGhMdfyA&pid=ImgRaw&r=0" className='md:h-[770px] h-[400px] mx-auto w-full md:w-auto' alt="" />
                <div className="absolute w-full flex md:flex-row flex-col inset-0 bg-gradient-to-b p-0 from-transparent to-[#020101] bg-opacity-20">
                </div>
            </div>
        </>
    )
}

