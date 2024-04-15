'use client'
import React from 'react';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi';

export default function ProjectInfo({ data }) {
    return (
        <div className="container md:w-5/12 ms-auto flex h-fit md:h-screen overflow-y-auto flex-col gap-5 p-3 md:p-10">
            <h1 className="text-4xl my-10 font-bold capitalize">{data?.name}</h1>

            <div className="container w-full p-3 rounded-full bg-[#1c1b1b] flex items-center justify-center gap-5">
                <FiLink size={25} />
                <Link legacyBehavior href={data.url ? data?.url : '/'}>
                    <a className="text-lg text-white" target="_blank" rel="noopener noreferrer">
                        Live Preview
                    </a>
                </Link>
            </div>

            <p className="text-[15px] leading-7 font-light capitalize text-slate-300 mb-10">{data?.description}</p>

            <div>
                <h2 className="text-2xl font-bold mb-3">Technologies Used:</h2>
                <div className="container my-5 flex flex-wrap gap-3">
                    {data?.languages?.map((language, index) => (
                        <button key={index} className="px-4 py-2 text-md font-bold bg-[#1c1b1b] text-white">
                            {language}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3">Features:</h2>
                <ul className="list-disc pl-6">
                    {data?.features?.map((feature, index) => (
                        <li key={index} className="text-md">{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
