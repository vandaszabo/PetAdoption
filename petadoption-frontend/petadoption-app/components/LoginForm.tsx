'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import RedirectBtn from './RedirectBtn';
import SignInWithGoogleButton from './SignInWithGoogleBtn';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const signInResponse = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false
    });
    if(signInResponse && !signInResponse.error) {
      router.push('/')
    }else{
      console.log("Error: ", signInResponse);
      setError("Your email or password is wrong!");
    }
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