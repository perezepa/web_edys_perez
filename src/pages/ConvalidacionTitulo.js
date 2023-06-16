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

                <div id="convalidacion" className="box-textos">
                    <table id="one-column-emphasis">
                        <tbody>
                            <tr>
                                <td className="oce-first">
                                    <p>
                                        <strong>Institución:</strong> Ministerio de Educación Nacional de Colombia <br />
                                        <strong>Resolución:</strong> 019663 20 OCT 2020 <br />
                                        <strong>Título Convalidado:</strong> Ingeniero de Petróleos <br />
                                        <strong>Fecha de Convalidación:</strong> 23 Septiembre 2020 <br />
                                        <strong>País:</strong> Colombia <br />
                                        <strong>Región:</strong> Bogotá <br />
                                        <strong>Ciudad:</strong> Bogotá D.C <br />
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