import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const DatosPerfilLaboral = () => {
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
                                <NavLink to="/Perfil" activeClassName="active">Perfil Laboral</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* <!-- LIMPIAR LOS FLOTADOS --> */}
                    <div className="clearfix"></div>
                </div>
            </header>
            <div className="panel">
                {/* <!-- MENU --> */}
                <div /* style={{ width: '100%' }} */>
                    <nav id="menu3" /* style={{ borderRight: '1px solid #ccc', height: '400px' }} */>
                        <ul>
                            <li>
                                <NavLink to="/DatosPerfilLaboral" activeClassName="active">Datos Perfil Laboral</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="box-textos" /* style={{ float: 'left', width: '70%' }} */>
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p><strong>Perfil Laboral:</strong><br />
                                                        Profesional en <strong> Ingeniería de Petróleo</strong> con <strong>diploma</strong> en estudios
                                                        de petróleos en perforación y completamiento, capacidad de
                                                        liderazgo y trabajo en equipo, con más de 14 años de trayectoria Profesional 
                                                        en <strong>diseño y supervisión de Operaciones de perforación,
                                                        completamiento, rehabilitación y servicios a pozos. </strong>
                                                        Participación en proyectos de pozos <strong>profundos y someros</strong>, en
                                                        áreas de <strong>desarrollo y exploración</strong>, tanto en actividades de  
                                                        <strong> offshore</strong> como <strong>onshore</strong>.
                                    </p>
                                                        
                                </td>
                            </tr>
                            <tr>
                                <td className="oce-first">
                                    <strong>Posibilidad de Viajar:</strong> Si
                                                    </td>
                            </tr>
                            <tr>
                                <td className="oce-first">
                                    <strong>Posibilidad de Trasladarse:</strong> Si
                                                    </td>
                            </tr>
                            <tr>
                                <td className="oce-first">
                                    <strong>Interes en Oferta Teletrabajo:</strong> Si
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

export default DatosPerfilLaboral;