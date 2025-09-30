# 📝 Sistema de Gestión de Justificantes

Este es un sistema web para registrar y consultar justificantes de ausencia, desarrollado con **React** para el frontend y **Node.js + Express + MySQL** para el backend.

---

## 🛠️ Configuración del Proyecto

### 1. Clonar el repositorio
    git clone https://github.com/Raul-Verdin/Creacion-de-justificantes.git
    cd Creacion-de-justificantes

**Comandos útiles**
Ver ramas
    git branch

Cambiar de rama
    git checkout "Nombre de la rama"

Subir cambios
    git add .
    git commit -m "Descripción del cambio"
    git push

### 2. Configurar variables de entorno
    🖥️ Backend - (backend/.env)
        DB_HOST=localhost
        DB_USER=TU_USUARIO
        DB_PASSWORD=TU_PASSWORD
        DB_NAME=TU_BASE_DATOS

        Crear tabla (MySQL):
            CREATE TABLE solicitudes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(100),
                grupo VARCHAR(50),
                motivo TEXT,
                fecha_ausencia DATE,
                fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

    🌐 Frontend - (frontend-justificantes/.env)
        REACT_APP_API_URL=https://creacion-de-justificantes-backend.vercel.app

### 3. Instalar dependencias
    Desde la raíz del proyecto:
    npm install

    Esto instalará concurrently y configurará todo para correr el backend y frontend con un solo comando.

    Instala los paquetes en cada subcarpeta:
    cd backend
    npm install

    cd ../frontend-justificantes
    npm install

### 4. Ejecutar ambos servidores (frontend + backend)
    Desde la raíz del proyecto:
    npm start o npm run dev

    Esto ejecutará:
        Backend en http://localhost:4000
        Frontend en http://localhost:3000
