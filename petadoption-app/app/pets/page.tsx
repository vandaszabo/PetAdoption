'use client'
import React, { useEffect, useState } from 'react';
import FilterBtns from '@/components/FilterBtns';
import Image from 'next/image';

interface Pet {
  id: string;
  type: string;
  breed: string | null;
  name: string;
  age: number;
  isMale: boolean;
}

const PetsPage = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [type, setType] = useState<'' | 'cat' | 'dog'>('');
  const [message, setMessage] = useState<string>('');
  const [filteredPets, setFilteredPets] = useState<Pet[]>(pets);


  useEffect(() => {
    if (type === '') {
      setFilteredPets(pets);
    } else {
      setFilteredPets(pets.filter(pet => pet.type === type));
    }
  }, [type, pets]);


  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const response = await fetch('api/pets/list');
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        const petsData = await response.json();
        console.log(petsData);
        if (petsData.length === 0) {
          setMessage("There is no available pet at the moment. Please visit later!")
        }
        setPets(petsData);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPetsData();
  }, []);

  return (
    <div>
      <FilterBtns setType={setType} />
      <ul className='pets'>
        {filteredPets?.map(pet => (
          <li className='petCard' key={pet.id}>
            {pet.type === 'cat' ?
              <Image className='pet-image' src='/cat3.png' alt="pet" width={200} height={150} />
              : pet.type === 'dog' ?
                <Image className='pet-image' src='/dog3.png' alt="pet" width={200} height={150} />
                :
                <Image className='pet-image' src='/PawPrint2.png' alt="pet" width={200} height={150} />}
            <div className='top'>
              <h1>{pet.name}</h1>
              <p>{pet.age} years</p>
            </div>
            <h2>{pet.breed}</h2>
          </li>
        ))}
      </ul>
      {message && <h1 className='petMessage'>{message}</h1>}
    </div>
  );
};

export default PetsPage;
