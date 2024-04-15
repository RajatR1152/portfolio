'use client'
import React, { useState } from 'react'
import { auth } from '../shared/FirebaseConfig';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function page() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    let n;
    let v;

    function handle(e) {
        n = e.target.name;
        v = e.target.value;
        setUser({ ...user, [n]: v });
    }

    const router = useRouter();

    function submit() {
        signInWithEmailAndPassword(auth, user?.email, user?.password)
            .then((userCredential) => {
                localStorage.setItem("isAdmin", true);
                document.getElementById('warning').innerText = '';
                router.push('/');
            })
            .catch((error) => {
                document.getElementById('warning').innerText = 'invalid credentials';
            });
    }

    return (
        <div className="container w-full gap-5 flex-col h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome Back !</h1>

            <div className="container md:w-5/12 bg-ed-400 p-5 flex flex-col gap-5">
                <input name='email' value={user.email} onChange={handle} type="email" className="w-full focus:outline-none p-3 text-white bg-[#232121]" placeholder='email...' />
                <input name='password' value={user.password} onChange={handle} type="password" className="w-full focus:outline-none p-3 text-white bg-[#232121]" placeholder='password...' />
                <p id="warning" className="text-sm font-light text-center text-yellow-500"></p>
                <button onClick={submit} className="w-full p-3 bg-red text-lg font-semibold text-white bg-red-600 my-10">login</button>
            </div>

        </div>
    )
}
