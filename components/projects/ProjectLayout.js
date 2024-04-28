'use client'
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import ProjectCards from './ProjectCards';
import Link from 'next/link';
import { FaRegPlusSquare } from 'react-icons/fa';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/app/shared/FirebaseConfig';

export default function ProjectLayout() {

    const [n, setN] = useState(3);
    const [isAdmin, setIsAdmin] = useState(false);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProjects();
        setIsAdmin(localStorage.getItem('isAdmin'));
    }, []);

    async function getProjects() {
        const projectRef = collection(db, 'projects');
        const querySnapshot = await getDocs(projectRef);
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push(doc.data());
        });
        setProjectList(projects);
    }

    return (
        <div>
            <div className="container w-full md:w-11/12 mx-auto columns-1 md:columns-2">
                {
                    projectList?.map((d, i) => {
                        if (i <= n) {
                            return <ProjectCards key={i} data={d} />
                        }
                    })
                }
            </div>
            <div className="container w-fit mx-auto flex items-center justify-center p-4">
                {
                    n <= 3 ?
                        <button onClick={() => { setN(projectList.length) }} className="p-3 w-full flex gap-3 text-lg font-semibold text-white">
                            see more <MdOutlineKeyboardDoubleArrowDown size={30} />
                        </button>
                        :
                        <button onClick={() => { setN(3) }} className="p-3 w-full flex gap-3 text-lg font-semibold text-white">
                            see less <MdOutlineKeyboardDoubleArrowUp size={30} />
                        </button>
                }
            </div>

            <div className="container w-full flex items-center justify-center">
                {isAdmin ? <Link href={'/addproject'} className="w-fit items-center justify-center my-10 text-center p-3 px-20 md:px-28 text-lg bg-red-600 font-semibold rounded-xl mx-auto flex gap-4 text-white">add new project <FaRegPlusSquare size={30} /> </Link> : null}
            </div>

        </div>

    )
}
