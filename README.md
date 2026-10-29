# TODO List — React + Spring Boot

Aplicación web para administrar tareas personales, desarrollada como proyecto educativo para practicar **React** y su integración con una **API REST**.

## Funcionalidades

- Crear tareas con título, descripción y categoría.
- Listar todas las tareas.
- Marcar tareas como completadas y volver a abrirlas.
- Eliminar tareas.
- Clasificar tareas en Trabajo, Estudio y Personal.
- Navegar entre las páginas mediante React Router.

## Tecnologías utilizadas

### Frontend
- React
- Vite
- JavaScript
- HTML y CSS
- React Router
- Fetch API

### Backend
- Java 25
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database
- Maven
- Lombok

## Estructura del proyecto

```text
todolist/
├── src/
│   └── main/
│       └── java/
│           └── com/uade/todolist/
│               ├── config/
│               ├── controller/
│               ├── model/
│               ├── repository/
│               └── service/
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ListaTareas.jsx
    │   │   ├── ListaTareas.css
    │   │   ├── TareaItem.jsx
    │   │   └── TareaItem.css
    │   ├── pages/
    │   │   ├── Tareas.jsx
    │   │   └── AcercaDe.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    └── package.json
```

## Requisitos

- Java 25 o compatible con la configuración del proyecto.
- Maven o Maven Wrapper.
- Node.js y npm.

## Instalación y ejecución

### 1. Ejecutar el backend

Levantar el proyecto desde Visual Code.

El backend estará disponible en:

`http://localhost:8080`

### 2. Ejecutar el frontend

Abrir una terminal en la carpeta `frontend`:

```bash
cd frontend
npm install
npm run dev
```

Vite mostrará la dirección local de la aplicación, normalmente:

`http://localhost:5173`

**Importante:** mantener el backend y el frontend ejecutándose en terminales separadas.

## API REST

La API permite realizar operaciones CRUD (*Create, Read, Update, Delete*) sobre las tareas.

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/api/tareas` | Obtener todas las tareas |
| GET | `/api/tareas/{id}` | Obtener una tarea por ID |
| POST | `/api/tareas` | Crear una tarea |
| PUT | `/api/tareas/{id}` | Actualizar una tarea |
| DELETE | `/api/tareas/{id}` | Eliminar una tarea |

### Ejemplo de tarea en JSON

```json
{
  "titulo": "Estudiar React",
  "descripcion": "Repasar componentes y hooks",
  "tipo": "ESTUDIO",
  "completada": false
}
```

Los valores permitidos para `tipo` son `TRABAJO`, `ESTUDIO` y `PERSONAL`.

## Base de datos

El proyecto utiliza **H2**, una base de datos liviana que se ejecuta en memoria.

Esto permite trabajar sin instalar ni configurar un servidor de base de datos. Los datos se pierden cuando se detiene el backend.

## Conceptos de React aplicados

- **Componentes:** división de la interfaz en partes reutilizables.
- **Props:** comunicación de datos y funciones entre componentes.
- **useState:** administración del estado de la aplicación.
- **useEffect:** carga inicial de tareas desde la API.
- **Eventos:** respuesta a acciones del usuario, como crear o eliminar tareas.
- **Renderizado condicional:** mostrar mensajes según el estado de la lista.
- **Fetch API:** comunicación con el backend mediante solicitudes HTTP.
- **React Router:** navegación entre páginas sin recargar el documento.

## Arquitectura

La aplicación se divide en dos partes:

- **Frontend:** presenta la interfaz y gestiona las interacciones del usuario.
- **Backend:** expone una API REST, procesa las solicitudes y accede a los datos mediante Spring Data JPA.

La comunicación entre ambas partes se realiza mediante HTTP, utilizando JSON para intercambiar información.

## Objetivo educativo

El proyecto busca comprender cómo construir una interfaz con React, administrar su estado y conectarla con un backend desarrollado en Java y Spring Boot.
