
function AcercaDe() {
    return (
        <main className="contenedor">
            <h1>Acerca de este proyecto</h1>

            <p>
                Este proyecto consiste en una aplicación de gestión de tareas
                desarrollada como trabajo práctico. Permite crear, listar,
                completar y eliminar tareas, organizadas por categoría.
            </p>

            <h2>Tecnologías utilizadas</h2>

            <ul>
                <li>React para construir la interfaz de usuario.</li>
                <li>Spring Boot para desarrollar la API REST.</li>
                <li>H2 como base de datos para almacenar las tareas.</li>
            </ul>

            <h2>Conceptos de React aplicados</h2>

            <ul>
                <li>
                    <strong>Componentes:</strong> dividimos la interfaz en partes
                    reutilizables, como ListaTareas y TareaItem.
                </li>
                <li>
                    <strong>Props:</strong> enviamos datos y funciones entre
                    componentes.
                </li>
                <li>
                    <strong>useState:</strong> administramos el estado de las
                    tareas y los campos del formulario.
                </li>
                <li>
                    <strong>useEffect:</strong> cargamos las tareas al iniciar
                    la aplicación.
                </li>
                <li>
                    <strong>Eventos:</strong> respondemos a acciones del usuario,
                    como agregar, completar y eliminar tareas.
                </li>
                <li>
                    <strong>Fetch:</strong> nos comunicamos con la API REST para
                    consultar y modificar los datos.
                </li>
                <li>
                    <strong>React Router:</strong> navegamos entre distintas
                    páginas sin recargar el sitio.
                </li>
                <li>
                    <strong>CORS:</strong> Configuramos correctamente el backend para permitir 
                    la comunicación con el frontend.
                </li>
            </ul>
        </main>
    )
}

export default AcercaDe
