'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import RedirectBtn from './RedirectBtn';
import SignInWithGoogleButton from './SignInWithGoogleBtn';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
     <SignInWithGoogleButton />
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
        <button className='sign-in' type="submit">Sign In</button>
        <RedirectBtn title='SignUp' path='/register' />
      </div>
    </form>
  );
};

export default LoginForm;