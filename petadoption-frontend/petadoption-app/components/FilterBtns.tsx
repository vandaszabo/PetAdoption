'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

const FilterBtns = () => {
    const path = usePathname();

    return (
        <ul className='filterBtns'>
            <li className={path === '/pets' ? 'active-filter-btn' : 'filter-btn'}>
                <button>
                    <div className='all-avatar'></div>
                    All
                </button>
            </li>
            <li className={path === '/pets/cats' ? 'active-filter-btn' : 'filter-btn'}>
                <button>
                    <div className='cat-avatar'></div>
                    Cat
                </button>
            </li>
            <li className={path === '/pets/dogs' ? 'active-filter-btn' : 'filter-btn'}>
                <button>
                    <div className='dog-avatar'></div>
                    Dog
                </button>
            </li>
        </ul>
    )
}

export default FilterBtns