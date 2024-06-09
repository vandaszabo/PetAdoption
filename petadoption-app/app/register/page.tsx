import React from 'react'
import RegisterForm from '@/components/RegisterForm'
import Image from 'next/image'

const SignUpPage = () => {
  return (
      <div className='login-wrapper'>
        <div className="login-left">
        <h1><p>Happiness</p> starts here</h1>
        <Image className="login-image" src='/login-main-image.png' alt="person-with-cat" priority={true} width={500} height={500} />
      </div>
        <div className="login-right">
        <div className='login-logo'>
        <Image className="login-logo" src='/paw2.png' alt="paw" width={125} height={125} />
          <h3>Create Account</h3>
        </div>
          <RegisterForm />
        </div>
      </div>
  )
}

export default SignUpPage