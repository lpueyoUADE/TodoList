
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Tareas from './pages/Tareas'
import AcercaDe from './pages/acercaDe'

function App() {
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
    </BrowserRouter>
  )
}

export default App
