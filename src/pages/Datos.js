import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import {obtenerEdad} from '../helper';

import Footer from '../components/Footer';

const birthYear = "1976-9-23";

const Datos = () => {

    const datosDate = obtenerEdad(birthYear);

    let misDatos = {
        dia: datosDate[0].dia,
        mes: datosDate[1].mesString[0].stringMes,
        ano: datosDate[0].ano,
        edad: datosDate[3]
    }

    return (
        <Fragment>
            <div className="App">
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
                                    <NavLink to="/Personal" activeClassName="active">Informacion Personal</NavLink>
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
                                    <NavLink to="/Datos" >Datos Personales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Direccion" >Dirección</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contacto" >Datos de Contacto</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="box-textos" >
                        <table id="one-column-emphasis">
                            <tbody>
                                <tr>
                                    <td className="oce-first">
                                        <p>
                                            <strong>Nombres:</strong> Edys Wilvernay <br />
                                            <strong>Apellidos:</strong> Perez Flores <br />
                                            <strong>Pais de Nacimiento:</strong> Venezuela <br />
                                            <strong>Region de Nacimiento:</strong> Barinas <br />
                                            <strong>Nacionalidad:</strong> Venezolana <br />
                                            <strong>Tipo Documento:</strong> Passaporte <br />
                                            <strong>Numero Documento:</strong> 070802009 <br />
                                            <strong>Tipo Documento:</strong> Cedula Extranjeria <br />
                                            <strong>Numero Documento:</strong> 910982 <br />
                                            <strong>Fecha Nacimiento:</strong> {misDatos.dia} {misDatos.mes} {'de'} {misDatos.ano}<br />
                                            <strong>Edad:</strong> {misDatos.edad} {'años'} <br />
                                            <strong>Estado Civil:</strong> Casado <br />
                                            <strong>Genero:</strong> Hombre <br />
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 400 }}>
                < Footer />
            </div>
        </Fragment>
    );
}

export default Datos;