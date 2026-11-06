// Guardar
sessionStorage.setItem("Nombre",   "Carlos");
sessionStorage.setItem("Apellido", "Lopez");
sessionStorage.setItem("Edad", 25);

// Leer
const nombre = sessionStorage.getItem("Nombre");
console.log(nombre);

// Eliminar un elemento
sessionStorage.removeItem("token");

// Muestro por consola
const datos = { ...sessionStorage };
console.log(datos);

// Eliminar todo
sessionStorage.clear();