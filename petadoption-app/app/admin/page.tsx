import React from 'react'
import RegisterPet from '@/components/RegisterPet';
import PetTable from '@/components/PetTable';

const AdminPage = () => {

  return (
    <div className='admin-page'>
        <h1>Administrator page</h1>
        <div className='task-container'>
        <RegisterPet />
        <PetTable />
        </div>
    </div>
  )
}

export default AdminPage;