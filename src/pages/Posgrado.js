import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const Posgrado = () => {
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
                                <NavLink to="/Educacion" activeClassName="active">Educacion</NavLink>
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
                                <NavLink to="/Pregrado" activeClassName="active">Pregrado</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Posgrado" activeClassName="active">Posgrado</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ConvalidacionTitulo" activeClassName="active">Convalidacion Titulo</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="postgrado" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                        <strong>Institución:</strong> Instituto Frances del Petroleo (IFP School) <br />
                                        <strong>Nivel Académico:</strong> Diplomado <br />
                                        <strong>Título:</strong> Graduate Diploma of Petroleum Studies in Perforación y Completación <br />
                                        <strong>Fecha de Graduación:</strong> 20 Junio 2011 <br />
                                        <strong>País:</strong> Venezuela <br />
                                        <strong>Región:</strong> Zulia <br />
                                        <strong>Ciudad:</strong> Ciudad Ojeda <br />
                                        <strong>Promedio Académico:</strong> 18 puntos <br />
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

export default Posgrado;