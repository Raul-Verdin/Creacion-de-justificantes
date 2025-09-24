# 📝 Sistema de Gestión de Justificantes

Este es un sistema web para registrar y consultar justificantes de ausencia, desarrollado con **React** para el frontend y **Node.js + Express + MySQL** para el backend.

---

## ⚙️ Tecnologías utilizadas

- **Frontend:**
  - React
  - Axios
  - JavaScript (ES6)
  - HTML5 / CSS3

- **Backend:**
  - Node.js
  - Express
  - MySQL
  - CORS
  - dotenv

---

## 📁 Estructura del Proyecto

/Creacion-de-justificantes-02
│
├── backend/
│ ├── index.js # Archivo principal del servidor Express
│ ├── db.js # Conexión a la base de datos MySQL
│ ├── routes/
│  └── solicitudes.js # Rutas API (GET, POST, GET/:id)
│ 
│
├── frontend-justificantes/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Formulario.js # Componente de registro de solicitudes
│ │ │ └── ListaSolicitudes.js # Componente de lista y búsqueda
│ │ └── App.js
│ ├── public/
│ └── .env # Variable de entorno con URL del backend
│
├── package.json # Script raíz para correr ambos
└── README.md # Este archivo


---

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio

    git clone https://tu-repo-url.git
    cd Creacion-de-justificantes-02

### 2. Configurar variables de entorno
    🖥️ Backend - backend
        DB_HOST=localhost
        DB_USER=tu_usuario
        DB_PASSWORD=tu_contraseña
        DB_NAME=justificantes_db

        Asegúrate de tener la base de datos creada con la tabla solicitudes:
        CREATE TABLE solicitudes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100),
        grupo VARCHAR(50),
        motivo TEXT,
        fecha_ausencia DATE,
        fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

    🌐 Frontend - frontend-justificantes/.env

        REACT_APP_API_URL=http://localhost:4000

### 3. Instalar dependencias

    Desde la raíz del proyecto:
    npm install

    Esto instalará concurrently y configurará todo para correr el backend y frontend con un solo comando.

    ⚠️ Además, instala los paquetes en cada subcarpeta:
    cd backend
    npm install

    cd ../frontend-justificantes
    npm install

### 4. Ejecutar ambos servidores (frontend + backend)

Desde la raíz del proyecto:
Esto ejecutará:
    Backend en http://localhost:4000
    Frontend en http://localhost:3000

## Funcionalidades
📥 Registrar justificantes (nombre, grupo, motivo, fecha de ausencia)
📋 Ver lista de justificantes ordenada por fecha
🔍 Buscar por nombre, grupo, motivo o ID en tiempo real
🌐 Comunicación entre frontend y backend mediante Axios

## 💡 Notas
Si obtienes error ERR_CONNECTION_REFUSED, asegúrate de que el backend esté corriendo.
Si modificas .env, reinicia los servidores para que se apliquen los cambios.
Puedes modificar el puerto o ruta base si lo necesitas desde los .env.

>>>>>>> 01cd6e8 (Versión estable inicial del proyecto)
