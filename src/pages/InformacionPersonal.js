import React, { Fragment } from 'react';
//import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

import Header from '../components/Header';
//import Slider from '../components/Slider';
import Footer from '../components/Footer';

// Importar Imagenes
import img1 from '../img/grado1.jpg';
import img2 from '../img/grado2.jpg';
import img3 from '../img/grado3.jpg';
import img4 from '../img/grado4.jpg';

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

const InformacionPersonal = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Grado - Ingeniero de Petroleos</strong></span>
                            {/* <img src={img1} alt="img1" /> */}
                            <img src={slideImages[0]} alt="img1" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Grado - Diplomado en Petroleo</strong></span>
                            <img src={img2} alt="img2" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>II Congreso Petroleo y Gas - SPE</strong></span>
                            <img src={img3} alt="img3" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Curso Fracturamiento - Argentina</strong></span>
                            <img src={img4} alt="img4" className="imageStyle" />
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="App">
                < Header />
                {/* <!-- MENU --> */}
                <div className="panel" >
                    <nav id="menu3" /* style={{ borderRight: '1px solid #ccc', height: '400px' }} */>
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
                < Slideshow />
            </div>
            < Footer />
        </Fragment>
    );
}

export default InformacionPersonal;