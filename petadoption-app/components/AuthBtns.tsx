'use client'
import React from 'react';
import { useEffect } from 'react';
import LoginBtns from './LoginBtns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { NextPage } from 'next';
import AcoountBtn from './AcoountBtn';
import ActionCard from './ActionCard';

const AuthBtns: NextPage = () => {
    const router = useRouter();
    const path = usePathname();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (session && path === '/login') {
            router.push('/');
        }
    }, [session, router, path]);

    const isLoginPage = path === '/login';
    const isRegisterPage = path === '/register';

    return (
        <div>
            {status === 'loading'? (
               <div style={{ visibility: 'hidden' }}>
                <AcoountBtn />
               </div> 
            ) :
            status === 'authenticated' ? (
               <AcoountBtn />
            ) : (
            !isLoginPage && !isRegisterPage) ? (
                <LoginBtns />
            ) : null}
        </div>
    );
};

export default AuthBtns;
