'use client'
import React from 'react';
import { useEffect } from 'react';
import LoginBtns from './LoginBtns';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const AuthBtns: React.FC = () => {
    const router = useRouter();
    const path = usePathname();
    const {data:session } = useSession();

    useEffect(() => {
        if (session && path === '/login') {
            router.push('/');
        }
    }, [session, router, path]);

    const handleLogout = async () => {
        await signOut({ redirect: false, callbackUrl: '/' });
    };

    return (
        <div>
            {session? (
                <div className='user-display'>
                <Image className='user-image' src={session?.user?.image as string} alt="user" />
                <h2>{session?.user?.name}</h2>
                <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <LoginBtns />
            )}
        </div>
    );
};

export default AuthBtns;
