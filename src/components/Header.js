import React from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';


import '../css/App.css';


const Header = () => {

    return (

        <header id="header">
            <div className="center">
                {/* <!-- LOGO --> */}
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand"> {/* <!-- brand es como la marca del sitio --> */}
                        <strong>Ing.</strong> Edys Perez
                    </span>
                </div>
                {/* <!-- MENU --> */}
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

                {/* <!-- LIMPIAR LOS FLOTADOS --> */}
                <div className="clearfix"></div>
            </div>
        </header>

    );
}

export default Header;