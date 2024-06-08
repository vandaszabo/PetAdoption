'use client'
import React from 'react'
import { useState } from 'react';

type ButtonType = 'all' | 'cats' | 'dogs';
type PetType = 'cat' | 'dog' | '';

interface FilterBtnsProps {
    setType: (type: PetType) => void;
}

const FilterBtns: React.FC<FilterBtnsProps> = ({ setType }) => {
    const [selectedButton, setSelectedButton] = useState<ButtonType>('all');

    const handleTypeChange = ( button: ButtonType, pet: PetType) => {
        setSelectedButton(button);
        setType(pet);
    };


    return (
        <ul className='filterBtns'>
            <li className={selectedButton === 'all' ? 'active-filter-btn' : 'filter-btn'}>
                <button onClick={() => handleTypeChange('all', '')}>
                    <div className='all-avatar'></div>
                    All
                </button>
            </li>
            <li className={selectedButton === 'cats' ? 'active-filter-btn' : 'filter-btn'}>
                <button onClick={() => handleTypeChange('cats', 'cat')}>
                    <div className='cat-avatar'></div>
                    Cat
                </button>
            </li>
            <li className={selectedButton === 'dogs' ? 'active-filter-btn' : 'filter-btn'}>
                <button onClick={() => handleTypeChange('dogs', 'dog')}>
                    <div className='dog-avatar'></div>
                    Dog
                </button>
            </li>
        </ul>
    );
}

export default FilterBtns