'use client'
import React from 'react';
import { useEffect,useState } from 'react';
import LoginBtns from './LoginBtns';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NextPage } from 'next';

const AuthBtns: NextPage = () => {
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const router = useRouter();
    const path = usePathname();
    const {data:session } = useSession();
    const userEmail: string | null = localStorage.getItem('userEmail');

    useEffect(() => {
        if (userEmail) {
          setCurrentUser(userEmail);
        }
      }, [userEmail]);

    useEffect(() => {
        if (session && path === '/login') {
            router.push('/');
        }
    }, [session, router, path]);

    const handleLogout = async () => {
        await signOut({ redirect: false, callbackUrl: '/' });
    };
    const logoutUser = () => {
        localStorage.removeItem('userEmail');
        setCurrentUser(null);
    };

    return (
        <div>
            {session ? (
                <div className='user-display'>
                <Image className='user-image' src={session?.user?.image as string} alt="user" width={100} height={100}/>
                <h2>{session?.user?.name}</h2>
                <button onClick={handleLogout}>Logout</button>
                </div>
            ) : currentUser ? (
                <div className='user-display'>
                <h2>{currentUser}</h2>
                <button onClick={logoutUser}>Logout</button>
                </div>
            ):(
                <LoginBtns />
            )}
        </div>
    );
};

export default AuthBtns;
