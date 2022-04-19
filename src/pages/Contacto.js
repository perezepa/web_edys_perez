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
                                <NavLink to="/Contacto" activeClassName="active">Datos de Contacto</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="contactos" className="box-textos" /* style={{ float: 'left', width: '70%' }} */>
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