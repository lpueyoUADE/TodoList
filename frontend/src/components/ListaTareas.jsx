import './ListaTareas.css'
import TareaItem from './TareaItem'

function ListaTareas({ tareas, onCambiarEstado, onEliminar }) {
  return (
    <section>
      <h2>Tareas ({tareas.length})</h2>

      {tareas.length === 0 && <p>No hay tareas.</p>}

      <div className="lista-tareas">
        {tareas.map(tarea => (
          <TareaItem
            key={tarea.id}
            tarea={tarea}
            onCambiarEstado={onCambiarEstado}
            onEliminar={onEliminar}
          />
        ))}
      </div>
    </section>
  )
}

export default ListaTareas