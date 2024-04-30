import React from 'react';
import Logo from './Logo';
import NavBtns from './NavBtns';
import LoginBtns from './LoginBtns';

export const Navbar = () => {
    return (
        <header>
            <Logo />
            <NavBtns />
            <LoginBtns />
        </header>
    );
};
