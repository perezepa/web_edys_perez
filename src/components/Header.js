import React from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';


import '../css/App.css';


const Header = () => {

    return (

        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Ing.</strong> Edys Perez
                    </span>
                </div>
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Personal" activeClassName="active">Informacion Personal</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Perfil" activeClassName="active">Perfil Laboral</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Educacion" activeClassName="active">Educacion</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Experiencia" activeClassName="active">Experiencia Laboral</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="clearfix"></div>
            </div>
        </header>

    );
}

export default Header;