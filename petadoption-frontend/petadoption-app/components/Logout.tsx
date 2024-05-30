'use client'
import React from 'react'
import { signOut } from 'next-auth/react';

const Logout = () => {
    const handleLogout = async () => {
        await signOut({ redirect: true, callbackUrl: '/' });
    };

  return (
    <div className='logout-button'>
    <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Logout