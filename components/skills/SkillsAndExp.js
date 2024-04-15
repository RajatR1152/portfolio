'use client'
import React, { use, useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/app/shared/FirebaseConfig';
import Link from 'next/link';
import { FaPlus, FaPlusSquare, FaRegPlusSquare } from 'react-icons/fa';

export default function SkillsAndExp() {

    const id = new Date().getTime().toString();
    const [skillsList, setSkillsList] = useState([]);
    const [i, setI] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        getSkills();
        setIsAdmin(localStorage.getItem('isAdmin'));
    }, [])

    console.log(isAdmin);

    async function getSkills() {
        const q = query(collection(db, 'skills'));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((e) => {
            setSkillsList(skillsList => [...skillsList, e.data()]);
        })
    }

    function removeDuplicates(array, key) {
        var lookup = {};
        var result = [];
        for (var i = 0; i < array.length; i++) {
            lookup[array[i][key]] = array[i];
        }
        for (key in lookup) {
            result.push(lookup[key]);
        }
        return result;
    }

    var uniqueArr = removeDuplicates(skillsList, 'name');

    return (
        <div id='skills' className="container p-4 md:p-6 mt-12 w-full h-fit">

            <div className="container w-fit my-20 flex p-10 mt-10 items-center justify-center mx-auto">
                <h1 className="great-vibes-regular md:text-[140px] text-[70px] absolute text-[#1b1919] text-center">Skills</h1>
                <h1 className="text-3xl md:text-5xl font-extrabold absolute text-white text-center capitalize">languages i speak</h1>
            </div>

            <p className="text-lg my-16 md:w-8/12 mx-auto font-semibold text-center text-white">
                As a seasoned web developer, I possess a diverse skill set tailored to crafting dynamic,
                responsive, and visually stunning web experiences. My proficiency extends across various
                programming languages, frameworks, and tools, enabling me to deliver high-quality solutions
                that meet the needs and exceed expectations.
            </p>

            <div className="containe w-full columns-1 md:columns-2">
                {
                    uniqueArr?.map((a, i) => {

                        return (
                            <div key={i} className="container w-full p-5">
                                <div className="container items-center gap-3 w-full flex">
                                    {a?.name != 'express js' ? (< img src={a?.img} alt="" className="h-8" />) :
                                        (<div className="container w-fit p-2 border border-white rounded-full text-white text-sm font-semibold">
                                            EX
                                        </div>)
                                    }
                                    <h1 className="text-2xl my-3 font-semibold">{a?.name}</h1>
                                    <h1 className="text-2xl my-3 font-semibold ms-auto">{a?.value}%</h1>
                                </div>
                                <input value={a?.value} type="range" className='w-full accent-red-700' />

                            </div>
                        )
                    })
                }
            </div>

            <div className="container w-full flex items-center justify-center">
                {isAdmin ? <Link href={'/addSkills'} className="w-fit items-center justify-center my-10 text-center p-3 px-20 md:px-28 text-lg bg-red-600 font-semibold rounded-xl mx-auto flex gap-4 text-white">add new skill <FaRegPlusSquare size={30} /> </Link> : null}
            </div>

        </div>
    )
}
