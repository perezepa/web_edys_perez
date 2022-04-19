import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';


const Pregrado = () => {
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
                            {/* <li>
                                <NavLink to="/Pregrado" activeClassName="active">Pregrado</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Posgrado" activeClassName="active">Posgrado</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ConvalidacionTitulo" activeClassName="active">Convalidacion Titulo</NavLink>
                            </li> */}
                        </ul>
{/*                         <div id="pregrado" className="accordion-body tabcontent">
                            <table id="one-column-emphasis">
                                <tbody>
                                    <tr>
                                        <td className="oce-first">
                                            <p>
                                                <strong>Institución:</strong> Universidad del Zulia <br />
                                                <strong>Nivel Académico:</strong> Pregrado <br />
                                                <strong>Título:</strong> Ingeniero de Petróleo <br />
                                                <strong>Fecha de Graduación:</strong> 20 Septiembre 2002 <br />
                                                <strong>País:</strong> Venezuela <br />
                                                <strong>Región:</strong> Zulia <br />
                                                <strong>Ciudad:</strong> Maracaibo <br />
                                                <strong>Promedio Académico:</strong> 14 puntos <br />
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
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
                <div id="pregrado" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                        <strong>Institución:</strong> Universidad del Zulia <br />
                                        <strong>Nivel Académico:</strong> Pregrado <br />
                                        <strong>Título:</strong> Ingeniero de Petróleo <br />
                                        <strong>Fecha de Graduación:</strong> 20 Septiembre 2002 <br />
                                        <strong>País:</strong> Venezuela <br />
                                        <strong>Región:</strong> Zulia <br />
                                        <strong>Ciudad:</strong> Maracaibo <br />
                                        <strong>Promedio Académico:</strong> 14 puntos <br />
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

export default Pregrado;