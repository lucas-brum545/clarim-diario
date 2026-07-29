import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Materia from '../pages/Materia/Materia'
import Cadastro from '../pages/Cadastro/Cadastro'
import Login from '../pages/Login/Login'
import './App.css'
import Painel from '../pages/Painel/Painel'
import RotaProtegida from '../components/RotaProtegida'

function App() {
  const [ tema, setTema ] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light'
    if(salvo) return salvo

    const preferenciaEscuro = window.matchMedia('(preferes-color-scheme: dark)').matches
    if(preferenciaEscuro) return 'dark'

    return 'light'
  })

  function alterarTema() {
    setTema(t => (t === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

    
  return (
    <>
    
      <Header tema={tema} aoAlternarTema={alterarTema} /> {/* prop drilling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materia/:id" element={<Materia />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/painel" element={
          <RotaProtegida>
            <Painel />
          </RotaProtegida>
        }></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App