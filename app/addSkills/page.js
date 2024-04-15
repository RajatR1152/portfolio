'use client'
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { db } from '../shared/FirebaseConfig';

export default function page() {

    const [isAdmin, setIsAdmin] = useState(false);
    const [data, setData] = useState({
        name: '',
        value: '',
        img: ''
    });

    useEffect(() => {
        const isAdminStored = localStorage.getItem('isAdmin');
        setIsAdmin(isAdminStored === 'true');
    }, [])

    let id = new Date().getTime().toString();

    let n;
    let v;

    function handle(e) {
        n = e.target.name;
        v = e.target.value;
        setData({ ...data, [n]: v });
    }

    async function add() {

        await setDoc(doc(db, 'skills', id), data).then(() => {
            alert('data added successfully');
        })
    }

    return (
        <div className="container w-full p-5 flex items-center h-screen justify-center gap-5">
            <div className="container p-5 flex flex-col gap-5  md:w-7/12">
                <input name='name' value={data.name} onChange={handle} type="text" placeholder='name...' className="w-full focus:outline-none p-3 text-white bg-[#232121]" />
                <input name='img' value={data.img} onChange={handle} type="text" placeholder='img...' className="w-full focus:outline-none p-3 text-white bg-[#232121]" />
                <input name='value' value={data.value} onChange={handle} type="number" placeholder='value...' max={100} className="w-full focus:outline-none p-3 text-white bg-[#232121]" />
                <button onClick={add} className="w-full p-3 bg-red text-lg font-semibold text-white bg-red-600 my-10">add</button>
            </div>
        </div>
    )
}
