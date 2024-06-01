import React from 'react'
import RegisterForm from '@/components/RegisterForm'

const SignUpPage = () => {
  return (
      <div className='login-wrapper'>
        <div className="login-left">
          <h1><p>Happiness</p> starts here</h1>
          <div className="login-image"></div>
        </div>
        <main className="login-right">
          <div className='login-logo'>
            <h3>Create Account</h3>
          </div>
          <RegisterForm />
        </main>
      </div>
  )
}

export default SignUpPage