import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const Direccion = () => {

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
                                <NavLink to="/Contacto" >Datos de Contacto</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="ubicacion" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                        <strong>Pais de Residencia:</strong> Colombia <br />
                                        <strong>Ciudad de Residencia:</strong> Bogota <br />
                                        <strong>Barrio:</strong> Bosa la Libertad <br />
                                        <strong>Direccion:</strong> Cra 88C #63-67Sur <br />
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

export default Direccion;