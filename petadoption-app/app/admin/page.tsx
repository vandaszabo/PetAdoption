import React from 'react'
import RegisterPet from '@/components/RegisterPet';

const AdminPage = () => {
  return (
    <div className='admin-page'>
        <h1>Administrator page</h1>
        <h2>Register new pet</h2>
        <RegisterPet />
    </div>
  )
}

export default AdminPage;