'use client'
import React, { useEffect, useState } from 'react';
import FilterBtns from '@/components/FilterBtns';

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

  const filteredPets = pets ? (type === '' ? pets : pets.filter(pet => pet.type === type)) : [];

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const response = await fetch('api/pets/list');
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        const petsData = await response.json();
        console.log(petsData);
        if(petsData.length === 0){
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
      <FilterBtns setType={() => setType} />
            <ul>
                {filteredPets?.map(pet => (
                    <ul className='petCard'>
                        <li key={pet.id}>
                            {pet.name} ({pet.type})
                        </li>
                    </ul>
                ))}
            </ul>
            {message && <h1 className='petMessage'>{message}</h1>}
    </div>
  );
};

export default PetsPage;
