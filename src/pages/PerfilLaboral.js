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
import img1 from '../img/pozosVecinos1.jpg';
import img2 from '../img/pozosVecinos2.jpg';
import img3 from '../img/pozosVecinos3.jpg';
import img4 from '../img/disenoPozo1.jpg';
import img5 from '../img/disenoPozo2.jpg';
import img6 from '../img/disenoPozo3.jpg';
import img7 from '../img/disenoPozo4.jpg';

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

const PerfilLaboral = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Analisis de Pozos</strong></span>
                            {/* <img src={img1} alt="img1" /> */}
                            <img src={slideImages[0]} alt="img1" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Analisis de Pozos</strong></span>
                            <img src={img2} alt="img2" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Analisis de Pozos</strong></span>
                            <img src={img3} alt="img3" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Asentamiento Revestidores</strong></span>
                            <img src={img4} alt="img4" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Diseño y Selección Revestidores</strong></span>
                            <img src={img5} alt="img5" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Diseño - Plan Direccional</strong></span>
                            <img src={img6} alt="img6" className="imageStyle" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan"><strong>Diseño - Anticolision</strong></span>
                            <img src={img7} alt="img7" className="imageStyle" />
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
                                <NavLink to="/DatosPerfilLaboral" activeClassName="active">Datos Perfil Laboral</NavLink>
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

export default PerfilLaboral;