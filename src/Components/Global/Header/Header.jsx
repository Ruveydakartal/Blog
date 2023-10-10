import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/Routes';
import Style from './Header.module.css';

const Header = () => {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Rüveyda's Blog</h1>
            <nav className={Style.nav}>
                <Link to={ROUTES.home} className={Style.navEl}>Home</Link>
                <Link to={ROUTES.home} className={Style.navEl}>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;