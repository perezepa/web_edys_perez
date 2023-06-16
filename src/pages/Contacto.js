import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const Contacto = () => {
    return (
        <Fragment>
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Ing.</strong> Edys Perez
                        </span>
                    </div>
                    <nav id="menu2">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Personal" activeClassName="active">Informacion Personal</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
            <div className="panel">
                <div >
                    <nav id="menu3">
                        <ul>
                            <li>
                                <NavLink to="/Datos" >Datos Personales</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Direccion" activeClassName="active">Dirección</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contacto" activeClassName="active">Datos de Contacto</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="contactos" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                        <strong>Correo:</strong> perezepa@gmail.com <br />
                                        <strong>Telefonos:</strong> +57 311-4489928 <br />
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ marginTop: 400 }}>
                < Footer />
            </div>
        </Fragment>
    );
}

export default Contacto;