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
                    {/* <!-- LOGO --> */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand"> {/* <!-- brand es como la marca del sitio --> */}
                            <strong>Ing.</strong> Edys Perez
                        </span>
                    </div>
                    {/* <!-- MENU --> */}
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
                    {/* <!-- LIMPIAR LOS FLOTADOS --> */}
                    <div className="clearfix"></div>
                </div>
            </header>
            <div className="panel">
                {/* <!-- MENU --> */}
                <div >
                    <nav id="menu3" /* style={{ borderRight: '1px solid #ccc', height: '400px'}} */>
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
                                        <strong>Instituci??n:</strong> Instituto Frances del Petroleo (IFP School) <br />
                                        <strong>Nivel Acad??mico:</strong> Diplomado <br />
                                        <strong>T??tulo:</strong> Graduate Diploma of Petroleum Studies in Perforaci??n y Completaci??n <br />
                                        <strong>Fecha de Graduaci??n:</strong> 20 Junio 2011 <br />
                                        <strong>Pa??s:</strong> Venezuela <br />
                                        <strong>Regi??n:</strong> Zulia <br />
                                        <strong>Ciudad:</strong> Ciudad Ojeda <br />
                                        <strong>Promedio Acad??mico:</strong> 18 puntos <br />
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