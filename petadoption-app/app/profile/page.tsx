'use client'

import React from 'react'
import { useSession } from 'next-auth/react';
import Logout from '@/components/Logout';
import Image from 'next/image';

const Profile = () => {
    const { data: session } = useSession();
    return (
        <div className='profile'>
            <div className='profile-left'>
                {session?.user?.image ?
                    <Image className='user-image' src={session?.user?.image as string} alt="user" width={100} height={100} />
                    : 
                    <Image className='user-image' src='/placeholder-profile.jpg' alt="user" width={100} height={100} />
                }
                <div>
                    <h2>{session?.user?.name}</h2>
                    <h3>{session?.user?.email}</h3>
                    <h3>{session?.user?.role}</h3>
                </div>
            </div>
            <Logout />
        </div>
    )
}

export default Profile