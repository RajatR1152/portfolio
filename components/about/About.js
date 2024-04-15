import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function About() {
    return (

        <div id='about' className="container w-full mt-32 flex h-fit flex-col md:flex-row md:h-screen md:gap-10 p-5 md:p-14">

            <div className="container md:flex md:gap-20 mx-auto justify-center w-full md:w-11/12">

                <div className="container md:w-4/12 h-full rounded bg-[#161716] py-5">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-r1.appspot.com/o/imgs%2FSnapchat-655529216.jpg?alt=media&token=aae4606e-9f61-4fcd-8355-4a686e014868" alt="" className="w-auto mx-auto h-full" />
                </div>

                <div className="container md:w-6/12 p-5 flex flex-col gap-8">

                    <h1 className="text-5xl uppercase font-bold">Rajat Randai</h1>

                    <p className="text-md font-semibold leading-7">
                        Hello there! I'm Rajat Randai, a passionate BCA student with a knack for web development.
                        I thrive on blending creativity with functionality to craft immersive digital experiences.
                        As both a dedicated learner and an aspiring web developer, I am constantly honing my skills
                        to stay ahead in the dynamic world of technology.
                    </p>


                    <a href="https://drive.google.com/file/d/1zErFiYdY0zG_H8ejuYqk6AwOq_hT_Jje/view?usp=sharing" download="resume.pdf" className='w-fit md:w-full mx-auto'>
                        <button className="px-9 py-4 bg-red-700 w-fit text-md text-white font-semibold">download cv</button>
                    </a>

                    <div className="container w-fit flex gap-5">
                        <Link className={'hover:text-red-600'} href={'https://www.instagram.com/rajatr1152?igsh=MXV4NXdzc3BlazA4NA=='}><FaInstagram size={35} /></Link>
                        <FaFacebook className='hover:text-red-600' size={35} />
                        <Link className={'hover:text-red-600'} href={'https://github.com/RajatR1152'}><FaGithub size={35} /></Link>
                        <Link className={'hover:text-red-600'} href={'https://www.linkedin.com/in/rajat-randai-b4606224a'}><FaLinkedinIn size={35} /></Link>
                        <Link className={'hover:text-red-600'} href={'https://twitter.com/RajatRandai'}><FaTwitter size={35} /></Link>
                    </div>

                </div>

            </div>

        </div>
    )
}
