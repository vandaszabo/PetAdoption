import LoginForm from '@/components/LoginForm'
import React from 'react'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className='login-wrapper'>
      <div className="login-left">
        <h1><p>Happiness</p> starts here</h1>
        <Image className="login-image" src='/login-main-image.png' alt="person-with-cat" priority={true} width={500} height={500} />
      </div>
      <div className="login-right">
        <div className='login-logo'>
        <Image className="login-logo" src='/paw2.png' alt="paw" width={125} height={125} />
          <h3>Login</h3>
        </div>
          <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage