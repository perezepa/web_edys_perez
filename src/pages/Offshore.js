import React, { Fragment } from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

import Footer from '../components/Footer';

import img1 from '../img/offshore1.jpg';
import img2 from '../img/offshore2.jpg';
import img3 from '../img/offshore3.jpg';
import img4 from '../img/offshore4.jpg';

const slideImages = [
    img1,
    img2,
    img3,
    img4
];

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Offshore = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                            <span style={{ display: 'block', margin: 'auto' }}><strong>Offshore - Lago de Maracaibo</strong></span>
                            <img src={slideImages[0]} alt="img1" style={{ display: 'block', margin: 'auto' }} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span style={{ display: 'block', margin: 'auto' }}><strong>Offshore - Lago de Maracaibo</strong></span>
                            <img src={img2} alt="img2" style={{ display: 'block', margin: 'auto' }} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span style={{ display: 'block', margin: 'auto' }}><strong>Offshore - Lago de Maracaibo</strong></span>
                            <img src={img3} alt="img3" style={{ display: 'block', margin: 'auto' }} />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span style={{ display: 'block', margin: 'auto' }}><strong>Offshore - Lago de Maracaibo</strong></span>
                            <img src={img4} alt="img4" style={{ display: 'block', margin: 'auto' }} />
                        </div>
                    </div>
                </Slide>
            </div>
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
                                <NavLink to="/ProfundoOffshore" activeClassName="active">Pozos Profundos</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{ marginTop: 100 }}>
                    < Slideshow />
                </div>
                <div className="clearfix"></div>
            </div>
            < Footer />
        </Fragment>
    );
}

export default Offshore;