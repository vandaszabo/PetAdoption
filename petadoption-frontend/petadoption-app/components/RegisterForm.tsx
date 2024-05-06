'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import RedirectBtn from './RedirectBtn';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Full Name</label>
      <input
        type="name"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <div className='btn-container'>
        <button className='sign-in' type="submit">Sign Up</button>
        <RedirectBtn title='Login' path='/login'/>
      </div>
    </form>
  );
};

export default RegisterForm;