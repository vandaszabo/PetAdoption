"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ZodError, z } from 'zod';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const loginSchema = z.object({
    email: z.string().email('Invalid email address').min(3),
    password: z.string()
      .min(6, 'Password must be at least 6 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = loginSchema.parse({ email, password });
      setIsLoading(true);

      // Here you can proceed with form submission logic
      // For example, make an API call to authenticate the user

      // If authentication is successful, navigate to the dashboard page
      router.push('/dashboard');
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        // Extract validation errors from ZodError
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            errors[err.path[0]] = err.message;
          }
        });
        setValidationErrors(errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {validationErrors.email && <span>{validationErrors.email}</span>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {validationErrors.password && <span>{validationErrors.password}</span>}

      <div className='btn-container'>
        <button className='sign-in' type="submit" disabled={isLoading}>
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
        <div className="message"> <span>Don't have an account?</span> <a href='/register'>Signup</a></div>
      </div>
    </form>
  );
};

export default LoginForm;