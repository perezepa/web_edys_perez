import React, { Fragment } from 'react';
//import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

// Importar Imagenes
import img1 from '../img/procesoPerforacion1.jpg';
import img2 from '../img/procesoPerforacion2.jpg';
import img3 from '../img/procesoPerforacion3.jpg';
import img4 from '../img/procesoPerforacion4.jpg';

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

const ExperienciaLaboral = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                            <span><strong>Fases Perforación</strong></span>
                            {/* <img src={img1} alt="img1" /> */}
                            <img src={slideImages[0]} alt="img1" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span><strong>Gestión Tiempo/Costo</strong></span>
                            <img src={img2} alt="img2" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span><strong>Actividades Perforación</strong></span>
                            <img src={img3} alt="img3" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span><strong>Actividades RaRc/Servicios</strong></span>
                            <img src={img4} alt="img4" />
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
                <div className="panel" >
                    <nav id="menu3" /* style={{ borderRight: '1px solid #ccc', height: '400px' }} */>
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
                < Slideshow />
                < Footer />
            </div>
        </Fragment>
    );
}

export default ExperienciaLaboral;