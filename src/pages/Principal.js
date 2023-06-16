import React, { Fragment } from 'react';

import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const Principal = () => {
    return ( 
        <Fragment>
        <div className="App">
          < Header />
  
          < Slider />
        </div>
        <div className="clearfix"></div>
          < Footer />
      </Fragment>
     );
}
 
export default Principal;