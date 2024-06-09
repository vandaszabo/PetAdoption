'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ZodError } from 'zod';
import { TSignUpSchema, registerSchema } from '@/schemas/registerSchema';

const RegisterForm: React.FC = () => {
  const [data, setData] = useState<TSignUpSchema>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<{ [key in keyof TSignUpSchema]?: string }>({});
  const [registered, setRegistered] = useState<boolean>(false);

  const handleChange = (field: keyof TSignUpSchema) => (e: ChangeEvent<HTMLInputElement>): void => {
    setData(prevData => ({ ...prevData, [field]: e.target.value }));
    setErrors(prevErrors => ({ ...prevErrors, [field]: undefined })); // Clear the error for the field being changed
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrors({});

    try {
      registerSchema.parse(data); // Validate data using Zod schema

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      setRegistered(true);
    } catch (error: any) {
      if (error instanceof ZodError) {
        const fieldErrors: { [key in keyof TSignUpSchema]?: string } = {};
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            const fieldName = err.path[0] as keyof TSignUpSchema;
            fieldErrors[fieldName] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ email: error.message }); // Display general errors under the email field or customize as needed
      }
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={data.name} onChange={handleChange('name')} />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={data.email} onChange={handleChange('email')} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={data.password} onChange={handleChange('password')} />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

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
