'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import HeroText from './HeroText';
import HeroImg from './HeroImg';


export default function Hero() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div style={{ backgroundImage: `url('https://framerusercontent.com/images/sGOMHwLOU1GCYCiAAgBOR0R0YU.png')` }} className="container p-0 bg-cover bg-fixed w-full h-[800px] md:h-screen">
            <div className="absolute z-1 w-full flex md:flex-row flex-col h-[800px] inset-0 bg-gradient-to-b p-0 from-transparent to-black bg-opacity-20">
                <div className="md:hidden"><HeroImg /></div>
                <HeroText />
                <div className="hidden md:block"><HeroImg /></div>
            </div>
        </div>

    )
}
