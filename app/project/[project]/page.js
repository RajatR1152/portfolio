'use client'
import { db } from '@/app/shared/FirebaseConfig';
import ProjectImgs from '@/components/projects/ProjectImgs';
import ProjectInfo from '@/components/projects/ProjectInfo';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {

    const param = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getProjectsData();
    })

    async function getProjectsData() {
        const q = query(collection(db, 'projects'), where("name", "==", param.project));

        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
            setData(doc?.data());
        })
    }

    return (
        <div className="container w-full flex md:flex-row flex-col">
            <div className="container md:w-6/12 h-fit md:hidden"><ProjectImgs data={data} /></div>
            <ProjectInfo data={data} />
            <div className="container md:w-6/12 h-fit md:block hidden"><ProjectImgs data={data} /></div>
        </div>
    )
}
