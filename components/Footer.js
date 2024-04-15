import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaMobile, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'

export default function Footer() {
    return (
        <>
            <div className="container w-full md:mt-40 xl:mt-36 p-5 md:p-10 flex flex-col bg-[#060505] md:flex-row">

                <div className="containe w-full md:w-5/12 flex flex-col gap-5">

                    <div className="container w-full md:w-fit flex md:ms-40 p-5 md:mt-10 items-start md:items-center md:justify-center">
                        <h1 className="logo md:text-[140px] text-[70px] md:block hidden absolute text-[#242323] text-center">Rajat</h1>
                        <h1 className="text-3xl md:text-4xl w-full font-bold md:absolute text-center">Rajat R1152</h1>
                    </div>

                    <p className="text-sm md:text-start text-center leading-5 w-10/12 mx-auto md:mx-0 md:mt-14">
                        My approach to web development is centered around collaboration, innovation, and attention to detail. I believe in understanding the unique needs of each project and translating them into elegant solutions that exceed expectations. By staying updated with the latest trends and technologies, I ensure that my work is not only cutting-edge but also future-proof.
                    </p>

                    <div className="container w-fit mx-auto md:w-full flex gap-8 py-5">
                        <Link className='cursor-pointer' href={'https://www.instagram.com/rajatr1152?igsh=MXV4NXdzc3BlazA4NA=='}><FaInstagram size={35} /></Link>
                        <FaFacebook size={35} />
                        <Link href={'https://github.com/RajatR1152'}><FaGithub size={35} /></Link>
                        <Link href={'https://www.linkedin.com/in/rajat-randai-b4606224a'}><FaLinkedinIn size={35} /></Link>
                        <Link href={'https://twitter.com/RajatRandai'}><FaTwitter size={35} /></Link>
                    </div>

                </div>

                <div className="containe w-full justify-center flex md:flex-col md:px-20 gap-4 md:gap-8 p-5 md:w-3/12">
                    <h1 className="text-lg md:block hidden font-semibold">Links</h1>
                    <a href="/" className='text-sm md:text-md'>Home</a>
                    <a href="#work" className='text-sm md:text-md'>my Work</a>
                    <a href="#about" className='text-sm md:text-md'>About me</a>
                    <a href="#skills" className='text-sm md:text-md'>languages i speak</a>
                </div>

                <div className="containe w-full flex flex-col md:mx-20 gap-7 p-5 md:w-3/12">

                    <h1 className="text-lg font-semibold">Contact</h1>

                    <input type="text" className="w-full focus:outline-none p-3" placeholder='contact' />

                    <span className='flex gap-6'><FaMobile size={25} />+91-8788987229</span>
                    <span className='flex gap-6'><FiMail size={25} />rajatrandai232@gmail.com</span>
                    <span className='flex gap-6'><MdLocationPin size={25} />--</span>

                </div>

            </div>

        </>
    )
}
