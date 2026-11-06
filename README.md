# TODO List — React + Spring Boot

Aplicación web para administrar tareas personales, desarrollada como proyecto educativo para practicar **React** y su integración con una **API REST** desarrollada en Java y Spring Boot.

El proyecto también incluye una demostración del uso de cookies HTTP para comprender cómo el navegador almacena información y cómo la intercambia con el backend.

## Funcionalidades

- Crear tareas con título, descripción y categoría.
- Listar todas las tareas.
- Marcar tareas como completadas y volver a abrirlas.
- Eliminar tareas.
- Clasificar tareas en Trabajo, Estudio y Personal.
- Navegar entre las páginas mediante React Router.
- Crear cookies desde Spring Boot.
- Enviar cookies automáticamente desde el navegador al backend.
- Leer cookies desde Spring Boot utilizando `@CookieValue`.

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
│               │   └── CookieController.java
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

Levantar el proyecto desde Visual Studio Code.

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

### Gestión de tareas

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

### Demostración de Cookies

El proyecto incluye dos endpoints para demostrar cómo funcionan las cookies HTTP entre React y Spring Boot.

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/api/cookies/crear` | Crear y enviar una cookie al navegador |
| GET | `/api/cookies/leer` | Recuperar una cookie enviada por el navegador |

La cookie utilizada en la demostración tiene las siguientes características:

| Atributo | Valor | Descripción |
|---|---|---|
| Nombre | `usuario` | Identificador de la cookie |
| Valor | `Luciano` | Dato almacenado |
| HttpOnly | `true` | Impide el acceso desde JavaScript |
| Secure | `false` | Permite utilizar HTTP en desarrollo local |
| Path | `/` | Disponible en todas las rutas correspondientes |
| SameSite | `Lax` | Restringe ciertos envíos desde otros sitios |

**Funcionamiento:**

1. React solicita la creación de la cookie al backend.
2. Spring Boot responde mediante el encabezado HTTP `Set-Cookie`.
3. El navegador almacena la cookie.
4. Cuando React solicita leerla, el navegador la envía automáticamente si corresponde.
5. Spring Boot recupera su valor mediante `@CookieValue`.

Para permitir el intercambio de cookies entre React y Spring Boot se utiliza:

- Configuración CORS con `allowCredentials(true)`.
- `credentials: "include"` en las solicitudes `fetch` del frontend.
- Un origen explícito permitido en la configuración CORS.

**Nota:** `Secure(false)` se utiliza únicamente para facilitar la demostración en HTTP local. En producción debe utilizarse HTTPS y configurar `Secure(true)`.

Esta implementación es una demostración educativa del funcionamiento de las cookies, no un sistema completo de autenticación.

## Base de datos

El proyecto utiliza **H2**, una base de datos liviana que se ejecuta en memoria.

Esto permite trabajar sin instalar ni configurar un servidor de base de datos. Los datos se pierden cuando se detiene el backend.

## Conceptos de React aplicados

- **Componentes:** división de la interfaz en partes reutilizables.
- **Props:** comunicación de datos y funciones entre componentes.
- **useState:** administración del estado de la aplicación.
- **useEffect:** carga inicial de tareas desde la API.
- **Eventos:** respuesta a acciones del usuario.
- **Renderizado condicional:** mostrar mensajes según el estado de la aplicación.
- **Fetch API:** comunicación con el backend mediante solicitudes HTTP.
- **React Router:** navegación entre páginas sin recargar el documento.

## Conceptos de Backend y Seguridad

- **API REST:** comunicación entre frontend y backend mediante HTTP.
- **Spring Boot:** desarrollo de endpoints y procesamiento de solicitudes.
- **Cookies HTTP:** almacenamiento e intercambio de información entre navegador y servidor.
- **Set-Cookie:** encabezado HTTP utilizado para enviar cookies al navegador.
- **CookieValue:** recuperación de cookies desde Spring Boot.
- **HttpOnly:** protección frente al acceso directo de JavaScript a las cookies.
- **CORS:** configuración de permisos para solicitudes entre distintos orígenes.
- **Credentials:** envío de cookies mediante solicitudes `fetch`.

## Arquitectura

La aplicación se divide en dos partes:

- **Frontend:** presenta la interfaz y gestiona las interacciones del usuario mediante React.
- **Backend:** expone una API REST, procesa las solicitudes y accede a los datos mediante Spring Data JPA.

La comunicación entre ambas partes se realiza mediante HTTP. Se utiliza JSON para intercambiar información de las tareas y encabezados HTTP para gestionar las cookies.

## Objetivo educativo

El proyecto busca comprender cómo construir una interfaz con React, administrar su estado y conectarla con un backend desarrollado en Java y Spring Boot.

También permite explorar los mecanismos de persistencia del navegador, el funcionamiento de las cookies HTTP y algunas consideraciones de seguridad relacionadas con el almacenamiento y el intercambio de información entre frontend y backend.
