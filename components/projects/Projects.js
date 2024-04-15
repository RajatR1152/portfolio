import React from 'react'
import ProjectLayout from './ProjectLayout'

export default function Projects() {
    return (
        <div id='work' className="container w-full h-screen p-5">

            <div className="container w-fit my-10 flex p-10 items-center justify-center mx-auto">
                <h1 className="great-vibes-regular md:text-[140px] text-[70px] absolute text-[#2a2929] text-center">Projects</h1>
                <h1 className="text-3xl md:text-5xl font-extrabold absolute text-white text-center">My Work</h1>
            </div>

            <ProjectLayout />

        </div>
    )
}
