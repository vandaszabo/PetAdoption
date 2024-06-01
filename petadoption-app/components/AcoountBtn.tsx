'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

const AcoountBtn = () => {
    const path = usePathname();
    return (
        <nav className='user-display'>
            <ul>
                <li className={path === '/profile' ? 'active' : ''}>
                    <a href='/profile'> Account </a>
                </li>
            </ul>
        </nav>
    )
}

export default AcoountBtn