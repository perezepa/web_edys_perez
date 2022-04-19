import React, { Fragment } from 'react';
//import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../css/App.css';

// Importar Componentes
import Header from '../components/Header';
//import Slider from '../components/Slider';
import Footer from '../components/Footer';

// Importar Imagenes
import img1 from '../img/1SOBREVIVENCIA2003.jpg';
import img2 from '../img/2.1WELLPLANING2004.jpg';
import img3 from '../img/2.2REGISTROS2004.jpg';
import img4 from '../img/2.3FLUIDOS2004.jpg';
import img5 from '../img/3.1SHAPERFORACION2005_1.jpg';
import img6 from '../img/4.1PERFHORIZONTAL2006.jpg';
import img61 from '../img/4.1VASSA2006.jpg';
import img7 from '../img/4.2H2S2006.jpg';
import img8 from '../img/4.3HORIZONTAL2006.jpg';
import img9 from '../img/4.4WELLCAT2006.jpg';
import img10 from '../img/5.1CEMENTACIONREMEDIAL2007.jpg';
import img11 from '../img/5.2CASINGSEATSTRESSCHECK2007.jpg';
import img12 from '../img/5.3PERFENTR2007.jpg';
import img13 from '../img/5.4REVESTIDORES2007_1.jpg';
import img14 from '../img/6WELLCONTROL2011.jpg';
import img15 from '../img/7.1WORKOVER2012_1.jpg';
import img16 from '../img/7.2CASINGSEAT2012.jpg';
import img17 from '../img/7.3STRESSCHECK2012.jpg';
import img18 from '../img/7.4WELLPLAN2012.jpg';
import img19 from '../img/7.5DRILLWORKS2012.jpg';
import img20 from '../img/7.6FRACTURA2012.jpg';
import img21 from '../img/8IICONGRESOSPE2013.jpg';
import img22 from '../img/9MANEJO2014.jpg';
import img23 from '../img/10ENGLISH2018.jpg';

const slideImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img61,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23
];

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


const Educacion = () => {

    const Slideshow = () => {
        return (
            <div className="containerSlideshow">
                <Slide {...proprietes} >
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Taller - Sobrevivencia</strong></span>
                            {/* <img src={img1} alt="img1" /> */}
                            <img src={slideImages[0]} alt="img1" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Wellplaning</strong></span>
                            <img src={img2} alt="img2" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Registros</strong></span>
                            <img src={img3} alt="img3" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Taller - Fluidos de Perforación</strong></span>
                            <img src={img4} alt="img4" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - SHA en las Operaciones</strong></span>
                            <img src={img5} alt="img5" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Perforación Horizontal</strong></span>
                            <img src={img6} alt="img6" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Seminario - Vassa</strong></span>
                            <img src={img61} alt="img61" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Basico de H2S</strong></span>
                            <img src={img7} alt="img7" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Horizontal and Multilateral Wells</strong></span>
                            <img src={img8} alt="img8" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Wellcat</strong></span>
                            <img src={img9} alt="img9" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Cementaciones Remediales</strong></span>
                            <img src={img10} alt="img10" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Casing Seat/Stress Check</strong></span>
                            <img src={img11} alt="img11" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Perforación en Tiempo Real</strong></span>
                            <img src={img12} alt="img12" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Diseño Revestidores</strong></span>
                            <img src={img13} alt="img13" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Well Control</strong></span>
                            <img src={img14} alt="img14" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Work Over</strong></span>
                            <img src={img15} alt="img15" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Casing Seat</strong></span>
                            <img src={img16} alt="img16" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Stress Check</strong></span>
                            <img src={img17} alt="img17" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - WellPlan</strong></span>
                            <img src={img18} alt="img18" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - DrillWorks</strong></span>
                            <img src={img19} alt="img19" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Fractura Hidráulica</strong></span>
                            <img src={img20} alt="img20" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Congreso SPE</strong></span>
                            <img src={img21} alt="img21" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Manejo Defensivo</strong></span>
                            <img src={img22} alt="img22" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <span className="imageSpan" /* style={{ display: 'block', margin: 'auto' }} */><strong>Curso - Level Fundamentals English</strong></span>
                            <img src={img23} alt="img22" className="imageStyle" /* style={{ display: 'block', margin: 'auto' }} */ />
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
                < Slideshow />
                {/* <div className="accordion-body tabcontent" style={{ float: 'left', width: '70%' }}>
                    < Slider />
                </div> */}
            </div>
{/*             <div style={{ marginTop: 400 }}>
                < Footer />
            </div> */}
            < Footer />
        </Fragment>
    );
}

export default Educacion;