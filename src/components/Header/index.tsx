import React, { lazy } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import './style.scss';

const Navigation = lazy(() => import('../Navigation'));
const Search = lazy(() => import('../Search'));

interface Props { }

const Header: React.FC<Props> = () => {
    return (
        <header className="header__wrapper">
            <NavLink className="header__logo" to="/"><img src={Logo} alt="logo" /></NavLink>
            <div className="header__right">
                <Navigation />
                <Search />
            </div>

        </header>
    );
};

export default Header;