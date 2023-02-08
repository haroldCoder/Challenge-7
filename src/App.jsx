import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Infogeneral from './components/Infogeneral'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'
import Principal from './components/Principal'

function App() {

  return (
    <BrowserRouter>
      <div className='mb-4'>
        <Menu/>
      </div>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/Portafolio' element={<Portfolio/>} /> 
        <Route path='/Informacion general' element={<Infogeneral/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
