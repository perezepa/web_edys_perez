import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const ComvalidacionTitulo = () => {
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

                <div id="convalidacion" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                        <strong>Instituci??n:</strong> Ministerio de Educaci??n Nacional de Colombia <br />
                                        <strong>Resoluci??n:</strong> 019663 20 OCT 2020 <br />
                                        <strong>T??tulo Convalidado:</strong> Ingeniero de Petr??leos <br />
                                        <strong>Fecha de Convalidaci??n:</strong> 23 Septiembre 2020 <br />
                                        <strong>Pa??s:</strong> Colombia <br />
                                        <strong>Regi??n:</strong> Bogot?? <br />
                                        <strong>Ciudad:</strong> Bogot?? D.C <br />
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

export default ComvalidacionTitulo;