import React, { Fragment, useState } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

import Footer from '../components/Footer';

const ProfundoOnshore = () => {
    const [supervisor, guardarSupervisor] = useState(false);
    const [cementacion, guardarCementacion] = useState(false);
    const [seniorperforacion, guardarSeniorperforacion] = useState(false);

    const obtenerSupervisor = () => {
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
                        <div id="logo">
                            <img src={logo} className="app-logo" alt="Logotipo" />
                            <span id="brand">
                                <strong>Ing.</strong> Edys Perez
                            </span>
                        </div>
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
                        <div className="clearfix"></div>
                    </div>
                </header>
                <div className="panel" >
                    <nav id="menu3">
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
                <div className="accordion-body tabcontent">
                    <nav id="menu2">
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
                <div
                    id="supervisor"
                    className="tabcontent">
                    <p className="accordion accordion-body">Supervisor de Perforación y Completamiento</p>

                    <div className="panel">
                        {
                            supervisor &&
                            <div className="accordion-body tabcontent">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petróleos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Supervisor de Perforación y Completamiento <br />
                                                    <strong>Fecha de inicio:</strong> 01/02/2009 <br />
                                                    <strong>Fecha final:</strong> 30/06/2012 <br />
                                                    <strong>Tiempo:</strong> 3.41 años <br />
                                                    <strong>País:</strong> Venezuela <br />
                                                    <strong>Región:</strong> Barinas <br />
                                                    <strong>Ciudad:</strong> Barinas <br />
                                                    <strong>Motivo de Retiro:</strong> Cambios Organizacionales <br />
                                                    <strong>Responsabilidades:</strong><br />
                                                    - Planeación y seguimiento diario (elaboración de reportes diarios Dims, carga de tiempos y costos, cambios de guardia con
                                                    alertas sobre los planes establecidos, inventarios de tubulares, fluidos y equipos) a las actividades de Perforación, Completamiento
                                                    e Intervención a pozos de petróleo y gas, en pozos de Desarrollo y Exploratorios.<br />
                                                    - Ejecución y supervisión a las actividades de Perforación de pozos verticales y direccionales; Completamiento de pozos con
                                                    EBES, completamientos sencillos y selectivos con empacaduras hidráulicas y permanentes, aislamientos entre empacaduras, casing
                                                    pach, registros a hoyo entubado, cañoneo (Casing Gun y TCP), Well testing, determinación de fugas de tubería; Rehabilitación
                                                    (Workover) y Servicios a Pozos, para recuperación de equipos de completamientos (EBES, empacaduras), operaciones de
                                                    pesca, cementaciones remediales, recañoneo, estimulaciones, pega de tubería, circulación y control de pozo, trabajos con Wireline.<br />
                                                    - Seguimiento tanto a nivel de Ingeniería (análisis de hidráulica de perforación, torque y arrastre, BHA, fluidos de perforación,
                                                    direccional, geología) como de Operaciones Logísticas (logísticas de materiales y equipos, para el Taladro y para el Pozo,
                                                    manejo de inventarios, características, condiciones, especificaciones técnicas, tiempos de operación, inspección, pruebas y
                                                    certificación de herramientas a ser bajadas en los pozos, solicitud de las Compañías de Servicios Especializados, pruebas de
                                                    equipos, manejo del personal del taladro, seguridad, ambiente y mantenimiento de las cabrias, plataformas, campamentos, así
                                                    como el buen estado de la localización y sus alrededores) y Operaciones de Pozos aplicando los procedimientos generales y
                                                    mejores prácticas operacionales establecidos por PDVSA, para el buen funcionamiento y operatividad de los taladros y cabrias.<br />
                                                    - Manejo de programas de perforación Dims, Data Analiser, Plataforma Landmark (wellplan, compass, opticem), Microsoft Office
                                                    (Excel, Words, Powerpoint).<br />
                                                    - Apoyo al ingeniero de operaciones en el chequeo de los diferentes equipos de perforación y completación, así como en las
                                                    diferentes actividades involucradas en el proceso de perforación, completación original, rehabilitación y servicios a pozos.<br />
                                                    - Verificación de las condiciones de la próxima localización (vía de acceso, cabezal del pozo y condición del celler) antes de mudar
                                                    la cabria, así como la coordinación de las mudanzas de los taladros y cabrias con el personal de transporte y la compañía
                                                    contratista.<br />
                                                    <strong>Logros Alcanzados:</strong><br />
                                                    - Durante la ocupación de este Cargo, se logró una Optimización de los Tiempos No Productivos (TNP) en las Áreas Operacionales
                                                    de Apure, Barinas y Guárico, de la Subgerencia Perforación División Boyacá (Tierra), mediante la Optimización de parámetros de
                                                    perforación, calibración y ajuste de factores de fricción por campos, Mejora en las logistas operacionales para la obtención de
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

                <div
                    onClick={obtenerCementacion}
                    id="cementacion"
                    className="tabcontent">
                    <p className="accordion accordion-body">Ingeniero Senior Cementación de Pozos</p>

                    <div className="panel">
                        {
                            cementacion &&
                            <div className="accordion-body tabcontent">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petróleos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Ingeniero Senior Cementación de Pozos <br />
                                                    <strong>Fecha de inicio:</strong> 01/07/2012 <br />
                                                    <strong>Fecha final:</strong> 30/11/2013 <br />
                                                    <strong>Tiempo:</strong> 1.42 años <br />
                                                    <strong>País:</strong> Venezuela <br />
                                                    <strong>Región:</strong> Barinas <br />
                                                    <strong>Ciudad:</strong> Barinas <br />
                                                    <strong>Motivo de Retiro:</strong> Cambios Organizacionales <br />
                                                    <strong>Responsabilidades:</strong><br />
                                                    - Planeación, diseño, ejecución, supervisión y seguimiento diario a las actividades de Cementación Primarias y Secundarias a
                                                    ejecutarse en las operaciones de perforación, completamiento, rehabilitación y servicios a pozos.<br />
                                                    - Elaboración de programas de cementación, programas de estimulación, análisis y pruebas de laboratorio de cementación y
                                                    estimulación, análisis de centralización y simulación de cementación, movimiento de tubería.<br />
                                                    - Logística de movilización de materiales y equipos necesarios para la cementación, corrida revestidores y liner de producción,
                                                    cementaciones con empacaduras, cementaciones con retenedores, colocación de tapones de hierro y tapones de cemento con
                                                    dump bailer.<br />
                                                    - Manejo de programas de perforación Dims, Data Analiser, Plataforma Landmark (wellcat, opticem), SAP, Microsoft Office (Excel,
                                                    Words, Powerpoint).<br />
                                                    - Elaboración de órdenes de servicios pre y pos-trabajos, a través de sistema SAP.<br />
                                                    <strong>Logros Alcanzados:</strong><br />
                                                    - Durante la ocupación de este Cargo, se logró conformar un gran equipo de trabajo y estandarización de los Procesos
                                                    (Rediseños de los Programas y ejecución de los Trabajos de Cementación y Estimulación de Pozos), Optimizando los Tiempos No
                                                    Productivos (TNP) correspondientes a los Servicios de Cementación en las Áreas Operacionales de Apure, Barinas y Guárico, de la
                                                    Subgerencia Perforación División Boyacá (Tierra).<br />
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

                <div
                    onClick={obtenerSeniorperforacion}
                    id="seniorperforacion"
                    className="tabcontent">
                    <p className="accordion accordion-body">Ingeniero Senior de Perforación y Completamiento</p>

                    <div className="panel">
                        {
                            seniorperforacion &&
                            <div className="accordion-body tabcontent">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="oce-first">
                                                <p>
                                                    <strong>Nombre de la Empresa:</strong> Petróleos de Venezuela (PDVSA) <br />
                                                    <strong>Cargo:</strong> Ingeniero Senior de Perforación y Completamiento <br />
                                                    <strong>Fecha de inicio:</strong> 01/12/2013 <br />
                                                    <strong>Fecha final:</strong> 16/04/2018 <br />
                                                    <strong>Tiempo:</strong> 4.41 años <br />
                                                    <strong>País:</strong> Venezuela <br />
                                                    <strong>Región:</strong> Barinas <br />
                                                    <strong>Ciudad:</strong> Barinas <br />
                                                    <strong>Motivo de Retiro:</strong> Motivos Personales <br />
                                                    <strong>Responsabilidades:</strong><br />
                                                    - Revisión e implementación de programas de perforación para pozos profundos en Onshore, trayectorias verticales y
                                                    direccionales en formaciones Consolidadas (areniscas, calizas) con completaciones para levantamiento artificial por EBES y
                                                    aislamiento entre empacaduras.<br />
                                                    - Procura de materiales y equipos para pozos y taladros (mechas, revestidores, cabezales, liner, colgadores, equipos de flotación,
                                                    equipos de Completacion, repuestos para los sistemas del taladro).<br />
                                                    - Seguimiento diario a las actividades de perforación, completamiento, rehabilitación y servicios a pozos.<br />
                                                    - Análisis e interpretación de los parámetros de perforación a través del software de perforación (landmark).<br />
                                                    - Elaboración de reportes (base de datos DIMS) e informes diarios de perforación.<br />
                                                    - Manejo de estadísticas de perforación, presentaciones gerenciales y de gestión.<br />
                                                    - Control administrativo del presupuesto (tiempo y costos operacionales) y contratos de servicios.<br />
                                                    - Supervisión en campo a los trabajos programados de los servicios especializados a pozos.<br />
                                                    - Resolución de problemas mediante la aplicación de procedimientos y mejores prácticas operacionales.<br />
                                                    - Supervisión y seguimiento al desempeño de los equipos de perforación direccional, tanto convencionales (motores de fondo),
                                                    como a las nuevas tecnologías (sistemas rotatorios).<br />
                                                    - Aplicación de las Normas de seguridad y medio ambiente.
                                                    - Elaboración de órdenes de servicios pre y pos-trabajos, a través de sistema SAP.<br />
                                                    - Administración de personal de taladro.<br />
                                                    - Participación en el proceso de visualización, selección, priorización y planeación de proyectos desde el punto de vista técnico,
                                                    económico y operativo, disponibilidad de equipos y materiales, para la incorporación temprana de pozos a producción.<br />
                                                    <strong>Logros Alcanzados:</strong><br />
                                                    - Durante la ocupación de este Cargo, se logró conformar un gran equipo de trabajo, estandarización de los Procesos (Rediseños
                                                    de los Programas de Perforación, Fluidos, Direccional, Cementación y Estimulación de Pozos) y seguimientos diarios a las
                                                    Operaciones de Perforación, Optimizando los Tiempos No Productivos (TNP) en las Áreas Operacionales de Apure, Barinas y
                                                    Guárico, de la Subgerencia Perforación División Boyacá (Tierra).<br />
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