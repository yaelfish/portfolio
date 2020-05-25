import React from 'react';
import { useTheme } from '../ThemeContext';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import girl from '../assets/images/girl.png';
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';

const Nav = styled("nav")`
  nav {
    background: ${props => props.theme.nav.background};
    transition: all 0.2s linear;

    div a {
      color: ${props => props.theme.nav.link};
    }
    .navbar-toggler-icon {
        background-image: ${props => props.theme.nav.url};
    }
  }
`;

export default function Navbar() {
    const themeState = useTheme();

    return (
        <Nav>
            <nav className={themeState.dark ? "navbar navbar-expand-lg navbar-dark flex justify-between" : "navbar navbar-expand-lg navbar-light flex justify-between"}>
                <div className="flex">
                    <NavLink
                        exact
                        activeClassName="active-link"
                        className="navbar-brand"
                        to="/"
                    >
                        <img src={girl} alt="logo" className="nav-logo" />
                        Yael Fisher
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="active-link active"
                                    className="nav-link"
                                    to="/"
                                >
                                    Hello <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="active-link active"
                                    className="nav-link"
                                    to="/project"
                                >
                                    Projects
                            </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="active-link active"
                                    className="nav-link"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <figure>
                    <img className="switch-mode"
                        alt={themeState.dark ? "light mode" : "dark mode"}
                        title={themeState.dark ? "To light mode" : "To dark mode"}
                        onClick={() => themeState.toggle()}
                        src={themeState.dark ? sun : moon}
                    />
                </figure>
            </nav>
        </Nav>
    )
}
