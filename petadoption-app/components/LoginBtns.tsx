'use client'
import React from 'react'

const LoginBtns = () => {
    return (
        <nav>
            <ul className='login-nav-items'>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li className='register'>
                    <a href="/register">Sign Up</a>
                </li>
            </ul>
        </nav>
    )
}

export default LoginBtns