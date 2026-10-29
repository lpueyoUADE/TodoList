import { useEffect, useState } from 'react'
import ListaTareas from '../components/ListaTareas'

const API_URL = 'http://localhost:8080/api/tareas'

function Tareas() {
  const [tareas, setTareas] = useState([])
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [tipo, setTipo] = useState('ESTUDIO')

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las tareas')
        }
        return response.json()
      })
      .then(data => setTareas(data))
      .catch(error => console.error(error))
  }, [])

  async function agregarTarea(event) {
    event.preventDefault()

    if (titulo.trim() === '') return

    const nuevaTarea = {
      titulo,
      descripcion,
      tipo,
      completada: false
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaTarea)
    })

    if (!response.ok) {
      console.error('Error al crear la tarea')
      return
    }

    const tareaGuardada = await response.json()

    setTareas([...tareas, tareaGuardada])
    setTitulo('')
    setDescripcion('')
    setTipo('ESTUDIO')
  }

  async function cambiarEstado(tarea) {
    const tareaActualizada = {
      ...tarea,
      completada: !tarea.completada
    }

    const response = await fetch(`${API_URL}/${tarea.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tareaActualizada)
    })

    if (!response.ok) {
      console.error('Error al actualizar la tarea')
      return
    }

    const actualizada = await response.json()

    setTareas(
      tareas.map(item =>
        item.id === actualizada.id ? actualizada : item
      )
    )
  }

  async function eliminarTarea(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      console.error('Error al eliminar la tarea')
      return
    }

    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  return (
    <main className="contenedor">
      <h1>Mi TODO List</h1>
      <p>Organizá tus tareas pendientes.</p>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={event => setTitulo(event.target.value)}
        />

        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={event => setDescripcion(event.target.value)}
        />

        <select
          value={tipo}
          onChange={event => setTipo(event.target.value)}
        >
          <option value="TRABAJO">Trabajo</option>
          <option value="ESTUDIO">Estudio</option>
          <option value="PERSONAL">Personal</option>
        </select>

        <button type="submit">Agregar tarea</button>
      </form>

      <ListaTareas
        tareas={tareas}
        onCambiarEstado={cambiarEstado}
        onEliminar={eliminarTarea}
      />
    </main>
  )
}

export default Tareas