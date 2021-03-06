import React, { Fragment, useState } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const ProfundoOnshore = () => {
    const [supervisor, guardarSupervisor] = useState(false);
    const [cementacion, guardarCementacion] = useState(false);
    const [seniorperforacion, guardarSeniorperforacion] = useState(false);

    /* const obtenerCementacion = () => {
        guardarCementacion(!supervisor && !seniorperforacion ? !cementacion  : cementacion);
    } */

    const obtenerSupervisor = () => {
        // Cambiar clase de textos de los acordeones
        let newClasssupervisor = document.querySelector('#supervisor');
        newClasssupervisor.classList.add('newClasssupervisor')

        let newClasscementacion = document.querySelector('#cementacion');
        newClasscementacion.classList.add('newClasscementacion')

        let newClasssenior = document.querySelector('#seniorperforacion');
        newClasssenior.classList.add('newClasssenior')

        guardarSupervisor(
            !cementacion && !seniorperforacion ? !supervisor && newClasssupervisor && newClasscementacion && newClasssenior :
                cementacion && !seniorperforacion ? guardarCementacion() ? null : !supervisor :
                    !cementacion && seniorperforacion ? guardarSeniorperforacion() ? null : !supervisor : !supervisor
        );
    }

    const obtenerCementacion = () => {
        // Cambiar clase de textos de los acordeones
        let newClasssupervisor = document.querySelector('#supervisor');
        newClasssupervisor.classList.add('newClasssupervisor')

        let newClasscementacion = document.querySelector('#cementacion');
        newClasscementacion.classList.add('newClasscementacion')

        let newClasssenior = document.querySelector('#seniorperforacion');
        newClasssenior.classList.add('newClasssenior')
        guardarCementacion(
            !supervisor && !seniorperforacion ? !cementacion && newClasssupervisor && newClasscementacion && newClasssenior:
                supervisor && !seniorperforacion ? guardarSupervisor() ? null : !cementacion :
                    !supervisor && seniorperforacion ? guardarSeniorperforacion() ? null : !cementacion : !cementacion
        );
    }

    const obtenerSeniorperforacion = () => {
        guardarSeniorperforacion(
            !supervisor && !cementacion ? !seniorperforacion :
                supervisor && !cementacion ? guardarSupervisor() ? null : !seniorperforacion :
                    !supervisor && cementacion ? guardarCementacion() ? null : !seniorperforacion : !seniorperforacion
        );
    }

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
                    /* onClick={() => guardarSupervisor(!supervisor)} */
                    /* onClick={() => guardarSupervisor(!cementacion && !seniorperforacion ? !supervisor : supervisor)} */
                    onClick={obtenerSupervisor}
                    id="supervisor"
                    className="tabcontent">
                    <p className="accordion accordion-body">Supervisor de Perforaci??n y Completamiento</p>

                    <div className="panel">
                        {
                            supervisor &&
                            <div className="accordion-body tabcontent">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petr??leos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Supervisor de Perforaci??n y Completamiento <br />
                                                    <strong>Fecha de inicio:</strong> 01/02/2009 <br />
                                                    <strong>Fecha final:</strong> 30/06/2012 <br />
                                                    <strong>Tiempo:</strong> 3.41 a??os <br />
                                                    <strong>Pa??s:</strong> Venezuela <br />
                                                    <strong>Regi??n:</strong> Barinas <br />
                                                    <strong>Ciudad:</strong> Barinas <br />
                                                    <strong>Motivo de Retiro:</strong> Cambios Organizacionales <br />
                                                    <strong>Responsabilidades:</strong><br />
                                                    - Planeaci??n y seguimiento diario (elaboraci??n de reportes diarios Dims, carga de tiempos y costos, cambios de guardia con
                                                    alertas sobre los planes establecidos, inventarios de tubulares, fluidos y equipos) a las actividades de Perforaci??n, Completamiento
                                                    e Intervenci??n a pozos de petr??leo y gas, en pozos de Desarrollo y Exploratorios.<br />
                                                    - Ejecuci??n y supervisi??n a las actividades de Perforaci??n de pozos verticales y direccionales; Completamiento de pozos con
                                                    EBES, completamientos sencillos y selectivos con empacaduras hidr??ulicas y permanentes, aislamientos entre empacaduras, casing
                                                    pach, registros a hoyo entubado, ca??oneo (Casing Gun y TCP), Well testing, determinaci??n de fugas de tuber??a; Rehabilitaci??n
                                                    (Workover) y Servicios a Pozos, para recuperaci??n de equipos de completamientos (EBES, empacaduras), operaciones de
                                                    pesca, cementaciones remediales, reca??oneo, estimulaciones, pega de tuber??a, circulaci??n y control de pozo, trabajos con Wireline.<br />
                                                    - Seguimiento tanto a nivel de Ingenier??a (an??lisis de hidr??ulica de perforaci??n, torque y arrastre, BHA, fluidos de perforaci??n,
                                                    direccional, geolog??a) como de Operaciones Log??sticas (log??sticas de materiales y equipos, para el Taladro y para el Pozo,
                                                    manejo de inventarios, caracter??sticas, condiciones, especificaciones t??cnicas, tiempos de operaci??n, inspecci??n, pruebas y
                                                    certificaci??n de herramientas a ser bajadas en los pozos, solicitud de las Compa????as de Servicios Especializados, pruebas de
                                                    equipos, manejo del personal del taladro, seguridad, ambiente y mantenimiento de las cabrias, plataformas, campamentos, as??
                                                    como el buen estado de la localizaci??n y sus alrededores) y Operaciones de Pozos aplicando los procedimientos generales y
                                                    mejores pr??cticas operacionales establecidos por PDVSA, para el buen funcionamiento y operatividad de los taladros y cabrias.<br />
                                                    - Manejo de programas de perforaci??n Dims, Data Analiser, Plataforma Landmark (wellplan, compass, opticem), Microsoft Office
                                                    (Excel, Words, Powerpoint).<br />
                                                    - Apoyo al ingeniero de operaciones en el chequeo de los diferentes equipos de perforaci??n y completaci??n, as?? como en las
                                                    diferentes actividades involucradas en el proceso de perforaci??n, completaci??n original, rehabilitaci??n y servicios a pozos.<br />
                                                    - Verificaci??n de las condiciones de la pr??xima localizaci??n (v??a de acceso, cabezal del pozo y condici??n del celler) antes de mudar
                                                    la cabria, as?? como la coordinaci??n de las mudanzas de los taladros y cabrias con el personal de transporte y la compa????a
                                                    contratista.<br />
                                                    <strong>Logros Alcanzados:</strong><br />
                                                    - Durante la ocupaci??n de este Cargo, se logr?? una Optimizaci??n de los Tiempos No Productivos (TNP) en las ??reas Operacionales
                                                    de Apure, Barinas y Gu??rico, de la Subgerencia Perforaci??n Divisi??n Boyac?? (Tierra), mediante la Optimizaci??n de par??metros de
                                                    perforaci??n, calibraci??n y ajuste de factores de fricci??n por campos, Mejora en las logistas operacionales para la obtenci??n de
                                                    materiales y equipos, tanto de taladros como de pozos, y eficiente manejo del personal de taladros.<br />
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

                <div /* style={{ marginTop: 0, float: 'right', width: '72%' }} */
                    /* onClick={() => guardarCementacion(!cementacion)} */
                    /* onClick={() => guardarCementacion(!supervisor && !seniorperforacion ? !cementacion  : cementacion)} */
                    /* onClick={obtenerCementacion} */
                    onClick={obtenerCementacion}
                    id="cementacion"
                    className="tabcontent">
                    <p className="accordion accordion-body">Ingeniero Senior Cementaci??n de Pozos</p>

                    <div className="panel">
                        {
                            cementacion &&
                            <div className="accordion-body tabcontent">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petr??leos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Ingeniero Senior Cementaci??n de Pozos <br />
                                                    <strong>Fecha de inicio:</strong> 01/07/2012 <br />
                                                    <strong>Fecha final:</strong> 30/11/2013 <br />
                                                    <strong>Tiempo:</strong> 1.42 a??os <br />
                                                    <strong>Pa??s:</strong> Venezuela <br />
                                                    <strong>Regi??n:</strong> Barinas <br />
                                                    <strong>Ciudad:</strong> Barinas <br />
                                                    <strong>Motivo de Retiro:</strong> Cambios Organizacionales <br />
                                                    <strong>Responsabilidades:</strong><br />
                                                    - Planeaci??n, dise??o, ejecuci??n, supervisi??n y seguimiento diario a las actividades de Cementaci??n Primarias y Secundarias a
                                                    ejecutarse en las operaciones de perforaci??n, completamiento, rehabilitaci??n y servicios a pozos.<br />
                                                    - Elaboraci??n de programas de cementaci??n, programas de estimulaci??n, an??lisis y pruebas de laboratorio de cementaci??n y
                                                    estimulaci??n, an??lisis de centralizaci??n y simulaci??n de cementaci??n, movimiento de tuber??a.<br />
                                                    - Log??stica de movilizaci??n de materiales y equipos necesarios para la cementaci??n, corrida revestidores y liner de producci??n,
                                                    cementaciones con empacaduras, cementaciones con retenedores, colocaci??n de tapones de hierro y tapones de cemento con
                                                    dump bailer.<br />
                                                    - Manejo de programas de perforaci??n Dims, Data Analiser, Plataforma Landmark (wellcat, opticem), SAP, Microsoft Office (Excel,
                                                    Words, Powerpoint).<br />
                                                    - Elaboraci??n de ??rdenes de servicios pre y pos-trabajos, a trav??s de sistema SAP.<br />
                                                    <strong>Logros Alcanzados:</strong><br />
                                                    - Durante la ocupaci??n de este Cargo, se logr?? conformar un gran equipo de trabajo y estandarizaci??n de los Procesos
                                                    (Redise??os de los Programas y ejecuci??n de los Trabajos de Cementaci??n y Estimulaci??n de Pozos), Optimizando los Tiempos No
                                                    Productivos (TNP) correspondientes a los Servicios de Cementaci??n en las ??reas Operacionales de Apure, Barinas y Gu??rico, de la
                                                    Subgerencia Perforaci??n Divisi??n Boyac?? (Tierra).<br />
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

                <div /* style={{ marginTop: 0, float: 'right', width: '72%' }} */
                    /* onClick={() => guardarSeniorperforacion(!seniorperforacion)} */
                    /* onClick={() => guardarSeniorperforacion(!supervisor && !cementacion ? !seniorperforacion : seniorperforacion)} */
                    onClick={obtenerSeniorperforacion}
                    id="seniorperforacion"
                    className="tabcontent">
                    <p className="accordion accordion-body">Ingeniero Senior de Perforaci??n y Completamiento</p>

                    <div className="panel">
                        {
                            seniorperforacion &&
                            <div className="accordion-body tabcontent">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petr??leos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Ingeniero Senior de Perforaci??n y Completamiento <br />
                                                    <strong>Fecha de inicio:</strong> 01/12/2013 <br />
                                                    <strong>Fecha final:</strong> 16/04/2018 <br />
                                                    <strong>Tiempo:</strong> 4.41 a??os <br />
                                                    <strong>Pa??s:</strong> Venezuela <br />
                                                    <strong>Regi??n:</strong> Barinas <br />
                                                    <strong>Ciudad:</strong> Barinas <br />
                                                    <strong>Motivo de Retiro:</strong> Motivos Personales <br />
                                                    <strong>Responsabilidades:</strong><br />
                                                    - Revisi??n e implementaci??n de programas de perforaci??n para pozos profundos en Onshore, trayectorias verticales y
                                                    direccionales en formaciones Consolidadas (areniscas, calizas) con completaciones para levantamiento artificial por EBES y
                                                    aislamiento entre empacaduras.<br />
                                                    - Procura de materiales y equipos para pozos y taladros (mechas, revestidores, cabezales, liner, colgadores, equipos de flotaci??n,
                                                    equipos de Completacion, repuestos para los sistemas del taladro).<br />
                                                    - Seguimiento diario a las actividades de perforaci??n, completamiento, rehabilitaci??n y servicios a pozos.<br />
                                                    - An??lisis e interpretaci??n de los par??metros de perforaci??n a trav??s del software de perforaci??n (landmark).<br />
                                                    - Elaboraci??n de reportes (base de datos DIMS) e informes diarios de perforaci??n.<br />
                                                    - Manejo de estad??sticas de perforaci??n, presentaciones gerenciales y de gesti??n.<br />
                                                    - Control administrativo del presupuesto (tiempo y costos operacionales) y contratos de servicios.<br />
                                                    - Supervisi??n en campo a los trabajos programados de los servicios especializados a pozos.<br />
                                                    - Resoluci??n de problemas mediante la aplicaci??n de procedimientos y mejores pr??cticas operacionales.<br />
                                                    - Supervisi??n y seguimiento al desempe??o de los equipos de perforaci??n direccional, tanto convencionales (motores de fondo),
                                                    como a las nuevas tecnolog??as (sistemas rotatorios).<br />
                                                    - Aplicaci??n de las Normas de seguridad y medio ambiente.
                                                    - Elaboraci??n de ??rdenes de servicios pre y pos-trabajos, a trav??s de sistema SAP.<br />
                                                    - Administraci??n de personal de taladro.<br />
                                                    - Participaci??n en el proceso de visualizaci??n, selecci??n, priorizaci??n y planeaci??n de proyectos desde el punto de vista t??cnico,
                                                    econ??mico y operativo, disponibilidad de equipos y materiales, para la incorporaci??n temprana de pozos a producci??n.<br />
                                                    <strong>Logros Alcanzados:</strong><br />
                                                    - Durante la ocupaci??n de este Cargo, se logr?? conformar un gran equipo de trabajo, estandarizaci??n de los Procesos (Redise??os
                                                    de los Programas de Perforaci??n, Fluidos, Direccional, Cementaci??n y Estimulaci??n de Pozos) y seguimientos diarios a las
                                                    Operaciones de Perforaci??n, Optimizando los Tiempos No Productivos (TNP) en las ??reas Operacionales de Apure, Barinas y
                                                    Gu??rico, de la Subgerencia Perforaci??n Divisi??n Boyac?? (Tierra).<br />
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

export default ProfundoOnshore;