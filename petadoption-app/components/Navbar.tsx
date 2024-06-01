import React from 'react';
import Logo from './Logo';
import NavBtns from './NavBtns';
import AuthBtns from './AuthBtns';

const Navbar: React.FC = async() => {
    return (
        <header>
            <Logo />
            <NavBtns />
            <AuthBtns/>
        </header>
    );
};

export default Navbar;