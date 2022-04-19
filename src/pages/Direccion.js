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
                                <NavLink to="/Personal" activeClassName="active">Informacion Personal</NavLink>
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
                <div id="ubicacion" className="box-textos" /* style={{ float: 'left', width: '70%' }} */>
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