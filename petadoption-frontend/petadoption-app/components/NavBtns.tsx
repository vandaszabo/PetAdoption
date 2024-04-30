'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

const NavBtns = () => {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li className={path === '/' ? 'active' : ''}>
                    <a href="/">Home</a>
                </li>
                <li className={path === '/pets' ? 'active' : ''}>
                    <a href="/pets">Browse</a>
                </li>
                <li className={path === '/contact' ? 'active' : ''}>
                    <a href="/contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBtns