# 🚀 Trabajo Práctico N°3 — Backend con Node.js, Express y Render

## 📚 Universidad Tecnológica Nacional

**Carrera:** Tecnicatura Universitaria en Programación  
**Materia:** Programación III  
**Profesor:** Gustavo Ramoscelli  
**Ayudante:** Maria Victoria Ruiz  

---

# 👥 Integrantes

## Grupo N° 4

- Nikolas Ramos  
- Ramiro Olea  
- Ivo Castiglia  
- Gino Marigioli  
- Federico Luengo  
- Andres Emiliano Rossi  

---

# 🎮 Nombre del Proyecto

Nexbit - Video Game Store Games API

---

# 📝 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js y Express para administrar información relacionada a videojuegos.

La aplicación utiliza archivos JSON como simulación de base de datos y permite consumir información dinámica desde un front-end conectado mediante peticiones HTTP.

---

# 🌐 Deploys

## 🔗 Backend Deploy (Render)

https://programacion3-tp3.onrender.com/

---

## 🔗 Frontend Deploy (GitHub Pages)

https://nikolasramos.github.io/Programacion3-tp1/pages/login.html

---

# 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- Nodemon
- dotenv
- cors
- Git
- GitHub
- Render
- GitHub Pages
- JavaScript
- JSON

---

# 📂 Distribución de Carpetas y Archivos

```bash
📦 proyecto
 ┣ 📂 controllers
 ┃ ┗ 📜 juegosController.js
 ┃
 ┣ 📂 data
 ┃ ┗ 📜 juegos.json
 ┃
 ┣ 📂 models
 ┃ ┗ 📜 server.js
 ┃
 ┣ 📂 routes
 ┃ ┗ 📜 juegosRoutes.js
 ┃
 ┣ 📜 .gitignore
 ┣ 📜 README.md
 ┣ 📜 app.js
 ┣ 📜 package.json
 ┗ 📜 package-lock.json
```

---

# 🔀 Metodología de Trabajo con Git y GitHub

El proyecto fue desarrollado utilizando ramas de Git para organizar el trabajo colaborativo.

## Ramas utilizadas

- `main`
- `dev`
- ramas individuales por integrante

## Flujo de trabajo

1. Crear rama desde `dev`
2. Realizar cambios
3. Hacer commits descriptivos
4. Subir cambios al repositorio
5. Crear Pull Request
6. Realizar merge hacia `dev`
7. Merge final hacia `main`

---

# 👨‍💻 División del Trabajo

| Integrante | Tareas |
|---|---|
| Nikolas Ramos | Configuración del servidor y deploy |
| Ramiro Olea | Desarrollo de endpoints |
| Ivo Castiglia | Manejo de JSON y controladores |
| Gino Marigioli | Configuración de rutas |
| Federico Luengo | Front-end y consumo de API |
| Andres Emiliano Rossi | Testing y documentación |

---

# 📡 Endpoints Implementados

## 🔹 GET /juegos

Retorna el listado completo de videojuegos.

---

## 🔹 GET /juegos/:id

Retorna el detalle de un videojuego específico según su ID.

---
##    GET /equipo

Retorna la información del equipo responsable de la página

---
# 📄 Explicación de Archivos

---

## 📂 app.js

Archivo principal de entrada de la aplicación.

### Funciones

- Inicialización del servidor
- Configuración de middlewares
- Configuración de rutas
- Inicio de escucha del servidor

### Ejemplo

```js
app.use(express.json());
app.use(cors());
```

---

## 📂 models/server.js

Archivo encargado de configurar el servidor Express.

### Responsabilidades

- Crear instancia del servidor
- Configurar puerto
- Exportar configuración

---

## 📂 routes/juegosRoutes.js

Archivo encargado de definir las rutas relacionadas con videojuegos.

### Ejemplo

```js
router.get("/", obtenerJuegos);
router.get("/:id", obtenerJuegoPorId);
```

---

## 📂 controllers/juegosController.js

Archivo encargado de la lógica principal de la API.

### Funciones principales

- Obtener videojuegos
- Obtener videojuegos por ID
- Leer archivos JSON
- Manejar errores
- Retornar respuestas HTTP

### Ejemplo de lectura JSON

```js
const data = await fs.readFile("./data/juegos.json", "utf-8");
const juegos = JSON.parse(data);
```

---

# ⚙️ Explicación de Funciones

---

## 📌 obtenerJuegos()

### Objetivo

Retornar el listado completo de videojuegos.

### Funcionamiento

1. Leer archivo JSON
2. Convertir JSON a objeto JavaScript
3. Retornar respuesta HTTP

---

## 📌 obtenerJuegoPorId()

### Objetivo

Buscar y retornar un videojuego específico mediante ID.

### Funcionamiento

1. Obtener ID desde parámetros
2. Buscar coincidencia
3. Retornar resultado

---

# ⚠️ Manejo de Errores

La aplicación utiliza bloques `try/catch` para evitar caídas inesperadas del servidor.

### Ejemplo

```js
try {

} catch(error) {
   res.status(500).json({
      mensaje: "Error interno del servidor"
   });
}
```

---

# 📄 Ejemplo de JSON Utilizado

## 📂 juegos.json

```json
[
  {
    "id": 7,
    "img": "link-img",
    "precio": "14.99$",
    "nombre": "Stardew Valley",
    "descripcion": "Has heredado la vieja parcela agrícola de tu abuelo. ¿Podrás vivir de la tierra?",
    "genero": "Simulación/RPG"
  }
]
```

---

# 📦 Dependencias Utilizadas

```json
"dependencies": {
   "cors": "^2.8.5",
   "dotenv": "^16.0.0",
   "express": "^4.18.2"
}
```

---

# ▶️ Instalación del Proyecto

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## Instalar dependencias

```bash
npm install
```

---

## Ejecutar servidor

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm start
```

---

# ✅ Funcionalidades Implementadas

- API REST
- Lectura de archivos JSON
- Endpoints GET
- Modularización
- Arquitectura MVC básica
- Uso de Express
- Manejo de errores
- Funciones asíncronas
- Uso de Git y GitHub
- Deploy en Render

---

# 🚀 Estado del Proyecto

✅ Funcional  
✅ Deploy realizado  
✅ Endpoints activos  
✅ Front-end conectado  
