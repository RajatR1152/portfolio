'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineExitToApp } from 'react-icons/md';

export default function Navs() {

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdminStored = localStorage.getItem('isAdmin');
    setIsAdmin(isAdminStored === 'true');
  }, [])

  function logOut() {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    window.location.reload();
  }

  return (
    <div className="container flex md:flex-row flex-col gap-5 md:me-10 w-fit ms-5 md:ms-auto">
      <Link className='font-bold text-lg capitalize' href={'#work'}>my work</Link>
      <Link className='font-bold text-lg capitalize' href={'#contact'}>contact</Link>
      <Link className='font-bold text-lg capitalize' href={'#about'}>about</Link>
      {
        isAdmin ? <MdOutlineExitToApp size={30} className='cursor-pointer' onClick={logOut} /> : null
      }
    </div>
  )
}
