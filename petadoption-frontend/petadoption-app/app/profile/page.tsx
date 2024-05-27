'use client'

import React from 'react'
import { useSession } from 'next-auth/react';

const Profile = () => {
    const { data: session } = useSession();
    return (
        <>
            <h2>Name: {session?.user?.name}</h2>
            <h2>Email: {session?.user?.email}</h2>
        </>
    )
}

export default Profile