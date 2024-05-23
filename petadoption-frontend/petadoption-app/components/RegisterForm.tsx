'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [registered, setRegistered] = useState<boolean>(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      console.log('User registered successfully');
      setRegistered(true);

    } catch (error: any) {
      setError(error.message);
    }
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

      {error && <p className="error">{error}</p>}

      <div className='btn-container'>
        {registered ? (
          <h1>Thank You for Registration!</h1>
        ) : (
          <button className='sign-in' type="submit">Sign Up</button>
        )}
        <div className="message"> <span>Already have an account?</span> <a href='/login'>Login</a></div>
      </div>
    </form>
  );
};

export default RegisterForm;
