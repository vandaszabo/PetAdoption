'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import RedirectBtn from './RedirectBtn';
import SignInWithGoogleButton from './SignInWithGoogleBtn';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginUser = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })

    console.log(response);

    if(response.ok){
      localStorage.setItem('userEmail', email)
      router.push('/')
    }
  };

  return (
    <form onSubmit={loginUser}>
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