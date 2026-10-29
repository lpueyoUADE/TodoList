
import './TareaItem.css'

function TareaItem({ tarea, onCambiarEstado, onEliminar }) {
  return (
    <article className={`tarea ${tarea.completada ? 'tarea-completada' : ''}`}>
      <header className="tarea-header">
        <h3>{tarea.titulo}</h3>

        <span className={`tarea-tipo tipo-${tarea.tipo.toLowerCase()}`}>
          {tarea.tipo.charAt(0) + tarea.tipo.slice(1).toLowerCase()}
        </span>
      </header>

      <div className="tarea-descripcion">
        {tarea.descripcion || 'Sin descripción'}
      </div>

      <footer className="tarea-footer">
        <button
          className="boton-eliminar"
          onClick={() => onEliminar(tarea.id)}
        >
          Eliminar
        </button>

        <button
          className="boton-completar"
          onClick={() => onCambiarEstado(tarea)}
        >
          {tarea.completada ? 'Reabrir tarea' : 'Completar'}
        </button>
      </footer>
    </article>
  )
}

export default TareaItem
