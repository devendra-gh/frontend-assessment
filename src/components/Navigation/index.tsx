import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import './style.scss';

interface Props { }

const navData = [
    {
        content: 'menu.what_we_do',
        url: '/what-we-do',
        submenu: [
            {
                content: 'menu.what_we_do',
                url: '/what-we-do',
            },
            {
                content: 'menu.placeholder',
                url: '/',
            }
        ]
    },
    {
        content: 'menu.publications',
        url: '/publications',
        submenu: [
            {
                content: 'menu.publications',
                url: '/publications',
            },
            {
                content: 'menu.placeholder',
                url: '/',
            }
        ]
    },
    {
        content: 'menu.carrees',
        url: '/carrees',
        submenu: [
            {
                content: 'menu.carrees',
                url: '/carrees',
            },
            {
                content: 'menu.placeholder',
                url: '/',
            }
        ]
    },
    {
        content: 'menu.about_us',
        url: '/about',
        submenu: []
    },
    {
        content: 'menu.contact_us',
        url: '/contact',
        submenu: []
    }
];

const Navigation: React.FC<Props> = () => {

    const { t } = useTranslation();
    const [menuToggle, setMenuToggle] = useState(false);

    const onClickToggle = () => {
        setMenuToggle(!menuToggle);
    }

    const onClickNav = (event: any, isSubmenu: any) => {
        if (isSubmenu) {
            event.preventDefault();
        }
    }

    return (
        <nav className="navigation__wrapper">
            <button className="navigation__toggle" onClick={onClickToggle}>
                <span /><span /><span />
            </button>
            <ul className={cx(
                "navigation__menu",
                { 'navigation__menu--active': menuToggle }
            )}>
                {
                    navData.map((nav) => {
                        const { url, content, submenu } = nav;
                        const isSubmenu = submenu?.length || false;

                        return (
                            <li key={`${url}`} className="navigation__menu__item">
                                <NavLink
                                    activeClassName="navigation__link--active"
                                    className="navigation__link"
                                    to={url}
                                    onClick={(event) => onClickNav(event, isSubmenu)}
                                >
                                    {t(content)}
                                    {
                                        isSubmenu ?
                                            <span className="navigation__caret"><span className="navigation__caret__icon" /></span>
                                            : null
                                    }
                                </NavLink>
                                {
                                    isSubmenu ? (
                                        <div className="navigation__menu__item__subnav">
                                            <ul className="navigation__menu__sub">
                                                {
                                                    submenu.map((subNav) => {
                                                        return (
                                                            <li key={`${subNav.url}`} className="navigation__menu__item__sub">
                                                                <NavLink
                                                                    activeClassName="navigation__link__sub--active"
                                                                    className="navigation__link__sub"
                                                                    to={subNav.url}
                                                                >
                                                                    {t(subNav.content)}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    ) : null
                                }
                            </li>
                        )
                    })
                }
            </ul>

        </nav>
    );
};

export default Navigation;