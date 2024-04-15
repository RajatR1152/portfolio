import Link from 'next/link'
import React from 'react'

export default function HeroText() {
    return (
        <>
            <div data-aos="fade-up-right" className="container hidden md:flex z-10 md:mt-[20%] md:ms-12 md:w-6/12 flex-col p-5 text-center ">

                <div className="container w-full">
                    <h1 className="text-center text-2xl md:text-4xl capitalize  leading font-semibold md:font-extrabold">
                        Crafting digital <span className="text-4xl md:text-6xl uppercase ms-5 text-red-500 tracking-wide">dreams</span>
                    </h1>
                    <h1 className="text-center my-2 text-2xl md:text-4xl capitalize font-semibold md:font-extrabold">
                        into functional <span className="text-4xl md:text-6xl uppercase text-red-500 ms-5 tracking-wide">reality</span>.
                    </h1>
                </div>

                <div className="container w-9/12 mx-auto mt-5">
                    <p className="text-xl font-light text-center md:text-left ">
                        Hello there! I'm <span><Link href={'/login'}>Rajat</Link></span>, a passionate and innovative web developer on a mission to bring ideas to life in the digital realm.
                    </p>
                </div>

                <div className="container mx-auto mt-8 flex w-fit">
                    <Link href={'#about'}>
                        <button className="text-red-600 hover:text-white hover:bg-red-600 capitalize py-4 px-10 bg-transparent border-2 border-red-600 text-lg font-semibold">
                            about me
                        </button>
                    </Link>
                    <Link href={'#work'}>
                        <button className="bg-red-600 hover:text-red-600 hover:bg-transparent border-2 border-red-600 capitalize py-4 px-10 text-white text-lg font-semibold">
                            my work
                        </button>
                    </Link>
                </div>
            </div>

            <div className="container z-10 md:mt-[20%] md:hidden md:ms-12 md:w-6/12 flex flex-col p-5 text-center ">

                <div className="container w-full">
                    <h1 className="text-center text-2xl md:text-4xl capitalize  leading font-semibold md:font-extrabold">
                        Crafting digital <span className="text-4xl md:text-6xl uppercase ms-5 text-red-500 tracking-wide">dreams</span>
                    </h1>
                    <h1 className="text-center my-2 text-2xl md:text-4xl capitalize font-semibold md:font-extrabold">
                        into functional <span className="text-4xl md:text-6xl uppercase text-red-500 ms-5 tracking-wide">reality</span>.
                    </h1>
                </div>

                <div className="container w-9/12 mx-auto mt-5">
                    <p className="text-xl font-light text-center md:text-left ">
                        Hello there! I'm <span><Link href={'/login'}>Rajat</Link></span>, a passionate and innovative web developer on a mission to bring ideas to life in the digital realm.
                    </p>
                </div>

                <div className="container mx-auto gap-3 mt-8 flex w-fit">
                    <button className="bg-red-600 py-4 px-8 text-white text-lg font-semibold rounded-full">
                        my work
                    </button>
                </div>
            </div>
        </>
    )
}
