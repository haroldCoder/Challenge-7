import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Infogeneral from './components/Infogeneral';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Principal from './components/Principal';
import Usuarios from './components/Usuarios';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // aquí se puede agregar la lógica de validación de sesión de administrador
    setIsAdmin(true); // por ahora quemamos el acceso como administrador
  }, []);

  return (
    <BrowserRouter>
      <div className='mb-4'>
        <Menu isAdmin={isAdmin} />
      </div>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/portafolio' element={isAdmin ? <Portfolio /> : <Navigate to='/' />} />
        <Route path='/informacion-general' element={<Infogeneral />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
