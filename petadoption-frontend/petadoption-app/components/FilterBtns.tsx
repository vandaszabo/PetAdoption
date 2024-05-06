'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

const FilterBtns = () => {
    const path = usePathname();

    return (
        <ul className='filterBtns'>
            <li className={path === '/pets/all' ? 'active-filter-btn' : 'filter-btn'}>
                <a href="/pets/all">
                    <div className='all-avatar'></div>
                    All
                </a>
            </li>
            <li className={path === '/pets/cats' ? 'active-filter-btn' : 'filter-btn'}>
                <a href="/pets/cats">
                    <div className='cat-avatar'></div>
                    Cat
                </a>
            </li>
            <li className={path === '/pets/dogs' ? 'active-filter-btn' : 'filter-btn'}>
                <a href="/pets/dogs">
                    <div className='dog-avatar'></div>
                    Dog
                </a>
            </li>
        </ul>
    )
}

export default FilterBtns