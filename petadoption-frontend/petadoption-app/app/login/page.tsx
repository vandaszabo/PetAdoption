import LoginForm from '@/components/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='login-wrapper'>
      <div className="login-left">
        <h1><p>Happiness</p> starts here</h1>
        <div className="login-image"></div>
      </div>
      <main className="login-right">
        <div className='login-logo'>
          <h3>Login</h3>
        </div>
        <LoginForm />
      </main>
    </div>
  )
}

export default LoginPage