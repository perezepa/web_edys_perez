import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Principal from './pages/Principal';
import InformacionPersonal from './pages/InformacionPersonal';
import Datos from './pages/Datos';
import Direccion from './pages/Direccion';
import Contacto from './pages/Contacto';
import PerfilLaboral from './pages/PerfilLaboral';
import DatosPerfilLaboral from './pages/DatosPerfilLaboral';
import Educacion from './pages/Educacion';
import Pregrado from './pages/Pregrado';
import Posgrado from './pages/Posgrado';
import ConvalidacionTitulo from './pages/ConvalidacionTitulo';
import ExperienciaLaboral from './pages/ExperienciaLaboral';
import Onshore from './pages/Onshore';
import Somero from './pages/Somero';
import ProfundoOnshore from './pages/ProfundoOnshore';
import Offshore from './pages/Offshore';
import ProfundoOffshore from './pages/ProfundoOffshore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route 
          path='/Personal'
          element={<InformacionPersonal/>}
        />
        <Route
          path='/Datos'
          element={<Datos/>}
        />
        <Route
          path='/Direccion'
          element={<Direccion/>}
        />
        <Route
          path='/Contacto'
          element={<Contacto/>}
        />
        <Route
          path='/Perfil'
          element={<PerfilLaboral/>}
        />
        <Route
          path='/DatosPerfilLaboral'
          element={<DatosPerfilLaboral/>}
        />
        <Route
          path='/Educacion'
          element={<Educacion/>}
        />
        <Route
          path='/Pregrado'
          element={<Pregrado/>}
        />
        <Route
          path='/Posgrado'
          element={<Posgrado/>}
        />
        <Route
          path='/ConvalidacionTitulo'
          element={<ConvalidacionTitulo/>}
        />
        <Route
          path='/Experiencia'
          element={<ExperienciaLaboral/>}
        />
        <Route
          path='/Onshore'
          element={<Onshore/>}
        />
        <Route
          path='/Somero'
          element={<Somero/>}
        />
        <Route
          path='/ProfundoOnshore'
          element={<ProfundoOnshore/>}
        />
        <Route
          path='/Offshore'
          element={<Offshore/>}
        />
        <Route
          path='/ProfundoOffshore'
          element={<ProfundoOffshore/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
