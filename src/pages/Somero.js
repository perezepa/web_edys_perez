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
                    <p className="accordion accordion-body">Ingeniero de Perforaci??n y Completamiento</p>

                    <div className="panel">
                        {
                            somero &&
                            <div className="accordion-body tabcontent">
                                <table id="one-column-emphasis">
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petr??leos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Ingeniero de Perforaci??n y Completamiento <br />
                                                    <strong>Fecha de inicio:</strong> 11/06/2003 <br />
                                                    <strong>Fecha final:</strong> 31/05/2005 <br />
                                                    <strong>Tiempo:</strong> 1.97 a??os <br />
                                                    <strong>Pa??s:</strong> Venezuela <br />
                                                    <strong>Regi??n:</strong> Zulia <br />
                                                    <strong>Ciudad:</strong> Ciudad Ojeda <br />
                                                    <strong>Motivo de Retiro:</strong> Cambios Organizacionales <br />
                                                    <strong>Responsabilidades:</strong><br />
                            - Preparaci??n e implementaci??n del programa de perforaci??n para pozos someros con trayectorias verticales, direccionales y
                            horizontales, en formaciones No-Consolidadas y con completamientos para inyecci??n de vapor.<br />
                            - Aplicaci??n del software de perforaci??n (landmark) para la preparaci??n de programas.<br />
                            - Elaboraci??n del presupuesto del pozo, mediante la realizaci??n del estimado de tiempos y costos.<br />
                            - Procura de materiales y equipos para pozos (mechas, revestidores, cabezales, liner, colgadores, equipos de flotaci??n, equipos de
                            completaci??n, equipos de empaque con grava).<br />
                            - Seguimiento diario a las actividades de perforaci??n y completamiento de pozos.<br />
                            - An??lisis e interpretaci??n de los par??metros de perforaci??n a trav??s del software de perforaci??n (landmark).<br />
                            - Elaboraci??n de reportes (base de datos DIMS) e informes diarios de Perforaci??n.<br />
                            - Manejo de estad??sticas de perforaci??n y presentaciones de gesti??n.<br />
                            - Control administrativo del presupuesto (tiempo y costos operacionales) y contratos de servicios.<br />
                            - Supervisi??n en campo a los trabajos programados de los servicios especializados a pozos.<br />
                            - Resoluci??n de problemas mediante la aplicaci??n de procedimientos y mejores pr??cticas operacionales.<br />
                            - Supervisi??n y seguimiento al desempe??o de los equipos de perforaci??n direccional, tanto convencionales (motores de fondo),
                            como a las nuevas tecnolog??as (sistemas rotatorios), asignados para la perforaci??n de pozos con control de verticalidad,
                            direccionales y horizontales.<br />
                            - Aplicaci??n de las normas de seguridad y medio ambiente.<br />
                            - Elaboraci??n de ??rdenes de servicios pre y pos-trabajos, a trav??s de sistema SAP.<br />
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