import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Tareas from './pages/Tareas'
import AcercaDe from './pages/acercaDe'

function App() {
  const [mensaje, setMensaje] = useState("")

  async function crearCookie() {
    const respuesta = await fetch("http://localhost:8080/api/cookies/crear", { credentials: "include" });

    const resultado = await respuesta.text();
    setMensaje(resultado);
  }

  async function leerCookie() {
    const respuesta = await fetch("http://localhost:8080/api/cookies/leer", { credentials: "include" });

    const resultado = await respuesta.text();
    setMensaje(resultado);
  }

  return (
    <BrowserRouter>
      <nav className="navegacion">
        <Link to="/">Tareas</Link>
        <Link to="/acerca-de">Acerca de</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Tareas />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>

      <section className="cookies">
        <h3>Demostración de Cookies</h3>

        <div className="cookies-botones">
          <button onClick={crearCookie}>
            Crear cookie
          </button>

          <button onClick={leerCookie}>
            Leer cookie
          </button>
        </div>

        {mensaje && (
          <p className="cookies-mensaje">{mensaje}</p>
        )}
      </section>
    </BrowserRouter>
  )
}

export default App