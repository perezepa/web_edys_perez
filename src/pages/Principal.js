import React, { Fragment } from 'react';

/* Importar Componentes */
import Header from '../components/Header';
import Slider from '../components/Slider';
/* import Sidebar from './components/Sidebar'; */
import Footer from '../components/Footer';
/* import Section from './components/Section'; */

const Principal = () => {
    return ( 
        <Fragment>
        <div className="App">
          < Header />
  
          < Slider />
  
          {/* < Section /> */}
  
          {/* < Sidebar /> */}
        </div>
        <div className="clearfix"></div>
          < Footer />
      </Fragment>
     );
}
 
export default Principal;