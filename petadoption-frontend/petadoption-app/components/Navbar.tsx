import React from 'react';
import Logo from './Logo';
import NavButtons from './NavButtons';
import LoginButtons from './LoginButtons';

export const Navbar = () => {
    return (
        <header>
            <Logo />
            <NavButtons />
            <LoginButtons />
        </header>
    );
};
