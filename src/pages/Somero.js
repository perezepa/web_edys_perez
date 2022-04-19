import React, { Fragment, useState } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const Somero = () => {
    const [somero, guardarSomero] = useState(false);

    return (
        <Fragment>
            <div className="App">
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
                            <ul style={{ marginBottom: "0px" }}>
                                <li>
                                    <NavLink to="/">Inicio</NavLink>
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
                <div className="panel" >
                    <nav id="menu3" /* style={{ borderRight: '1px solid #ccc', height: '350px' }} */>
                        <ul>
                            <li>
                                <NavLink to="/Onshore" activeClassName="active">Onshore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Offshore" activeClassName="active">Offshore</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="accordion-body tabcontent" /* style={{ float: 'left', width: '70%' }} */>
                    <nav id="menu2" /* style={{ float: 'left', marginTop: -35, borderBottom: '1px solid #ccc', width: '105%' }} */>
                        <ul>
                            <li>
                                <NavLink to="/Somero" activeClassName="active">Pozos Someros</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ProfundoOnshore" activeClassName="active">Pozos Profundos</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div /* style={{ marginTop: 10, float: 'right', width: '72%' }} */
                    onClick={() => guardarSomero(!somero)}
                    id="somero"
                    className="tabcontent">
                    <p className="accordion accordion-body">Ingeniero de Perforación y Completamiento</p>

                    <div className="panel">
                        {
                            somero &&
                            <div className="accordion-body tabcontent">
                                <table id="one-column-emphasis">
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petróleos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Ingeniero de Perforación y Completamiento <br />
                                                    <strong>Fecha de inicio:</strong> 11/06/2003 <br />
                                                    <strong>Fecha final:</strong> 31/05/2005 <br />
                                                    <strong>Tiempo:</strong> 1.97 años <br />
                                                    <strong>País:</strong> Venezuela <br />
                                                    <strong>Región:</strong> Zulia <br />
                                                    <strong>Ciudad:</strong> Ciudad Ojeda <br />
                                                    <strong>Motivo de Retiro:</strong> Cambios Organizacionales <br />
                                                    <strong>Responsabilidades:</strong><br />
                            - Preparación e implementación del programa de perforación para pozos someros con trayectorias verticales, direccionales y
                            horizontales, en formaciones No-Consolidadas y con completamientos para inyección de vapor.<br />
                            - Aplicación del software de perforación (landmark) para la preparación de programas.<br />
                            - Elaboración del presupuesto del pozo, mediante la realización del estimado de tiempos y costos.<br />
                            - Procura de materiales y equipos para pozos (mechas, revestidores, cabezales, liner, colgadores, equipos de flotación, equipos de
                            completación, equipos de empaque con grava).<br />
                            - Seguimiento diario a las actividades de perforación y completamiento de pozos.<br />
                            - Análisis e interpretación de los parámetros de perforación a través del software de perforación (landmark).<br />
                            - Elaboración de reportes (base de datos DIMS) e informes diarios de Perforación.<br />
                            - Manejo de estadísticas de perforación y presentaciones de gestión.<br />
                            - Control administrativo del presupuesto (tiempo y costos operacionales) y contratos de servicios.<br />
                            - Supervisión en campo a los trabajos programados de los servicios especializados a pozos.<br />
                            - Resolución de problemas mediante la aplicación de procedimientos y mejores prácticas operacionales.<br />
                            - Supervisión y seguimiento al desempeño de los equipos de perforación direccional, tanto convencionales (motores de fondo),
                            como a las nuevas tecnologías (sistemas rotatorios), asignados para la perforación de pozos con control de verticalidad,
                            direccionales y horizontales.<br />
                            - Aplicación de las normas de seguridad y medio ambiente.<br />
                            - Elaboración de órdenes de servicios pre y pos-trabajos, a través de sistema SAP.<br />
                                                    <br />
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            < Footer />
        </Fragment >
    );
}

export default Somero;