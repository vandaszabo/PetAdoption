'use client'
import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import { Pet } from 'next-auth';
import { FormEvent } from 'react';

const RegisterPet = () => {
  const [newPet, setNewPet] = useState<Pet>({
    name: '',
    type: '',
    breed: '',
    age: 0,
    isMale: false
  });
  const [error, setError] = useState<string>('');
  const [created, setCreated] = useState<boolean>(false);

  const handleChange = (field: keyof Pet) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    let value: any;
    if (e.target.type === 'checkbox') {
      value = (e.target as HTMLInputElement).checked;
    } else if (e.target.type === 'select-one' && field === 'age') {
      value = Number(e.target.value); // Convert to number
    } else {
      value = e.target.value;
    }

    setNewPet(prevPet => ({ ...prevPet, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/pets/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      setCreated(true);
    } catch (error: any) {
        setError(error.message);
    }
  };

  return (
    <div className='register-pet'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={newPet.name}
        onChange={handleChange('name')}
      />

      <label htmlFor="type">Type</label>
      <select id="type" value={newPet.type} onChange={handleChange('type')}>
        <option value="">Select Type</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>

      {/* <label htmlFor="breed">Breed</label>
      <input
        type="text"
        id="breed"
        value={newPet.breed}
        onChange={handleChange('breed')}
      /> */}

      <label htmlFor="isMale">Male</label>
      <input
        type="checkbox"
        id="isMale"
        checked={newPet.isMale}
        onChange={handleChange('isMale')}
      />

      <label htmlFor="age">Age</label>
      <select id="age" value={newPet.age} onChange={handleChange('age')}>
        {Array.from({ length: 11 }, (_, i) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
      {error && <div className="error">{error}</div>}
      {created && <div className='message'>New pet successfully added.</div>}
      <button className='create' type="submit">Create</button>
    </form>
    </div>
  );
}

export default RegisterPet