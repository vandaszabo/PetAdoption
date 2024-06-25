'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { Pet } from '@prisma/client';

const PetTable = () => {

const [petList, setPetList] = useState<Pet[]>([]);

  const getPetList = async () => {
    try {
      const response = await fetch('/api/pets/list');
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      const data = await response.json();
      setPetList(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    getPetList();
  }, []);


  return (
    <div className='pet-table'>
         <h2>Pet List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Breed</th>
              <th>Age</th>
              <th>isMale</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {petList?.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>{pet.isMale}</td>
                <td><button>X</button></td>
                <td><button>...</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default PetTable