'use client'
import React from 'react';
import { useEffect } from 'react';
import LoginBtns from './LoginBtns';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NextPage } from 'next';

const AuthBtns: NextPage = () => {
    const router = useRouter();
    const path = usePathname();
    const { data: session } = useSession();

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
            {session ? (
                <div className='user-display'>
                    {/* {session?.user?.image &&
                        <Image className='user-image' src={session?.user?.image as string} alt="user" width={100} height={100} />
                    } */}
                    {/* <h2>{session?.user?.name}</h2> */}
                    <li className={path === '/profile' ? 'active' : ''}>
                    <a href={'/profile'}>Account</a>
                    </li>
                    <button onClick={handleLogout}>Logout<Image src='/logout_icon.png' alt='logout' width={30} height={40}/></button>
                </div>
            ) : (
                <LoginBtns />
            )}
        </div>
    );
};

export default AuthBtns;
