# TaskSync 🗂️

> Aplicación fullstack de gestión de tareas inspirada en Trello, con tableros, listas y tarjetas organizables mediante drag & drop.

---

## 🚀 Características

- 📋 **Gestión de tableros** — Crea y administra múltiples tableros de proyectos
- 📝 **Listas personalizadas** — Organiza tus tareas en columnas según tu flujo de trabajo
- 🃏 **Tarjetas de tareas** — Crea, edita y elimina tareas dentro de cada lista
- 🖱️ **Drag & Drop** — Arrastra y suelta tarjetas entre listas de forma intuitiva
- 🔐 **Autenticación** — Sistema de login seguro con JWT y Passport.js
- ✏️ **Editor de texto enriquecido** — Descripción de tareas con Quill editor

---

## 🛠️ Tecnologías

### Frontend (`client2`)
| Tecnología | Descripción |
|---|---|
| **React 18** | Librería principal para la UI |
| **Vite** | Bundler y entorno de desarrollo |
| **Redux Toolkit** | Manejo del estado global |
| **React Router DOM** | Navegación entre vistas |
| **Tailwind CSS** | Estilos utilitarios |
| **@hello-pangea/dnd** | Drag & Drop de tarjetas |
| **Axios** | Cliente HTTP para consumir la API |
| **Quill** | Editor de texto enriquecido |

### Backend (`server`)
| Tecnología | Descripción |
|---|---|
| **Node.js** | Entorno de ejecución del servidor |
| **Express** | Framework para la API REST |
| **Sequelize** | ORM para la base de datos |
| **SQLite3** | Base de datos relacional embebida |
| **JWT** | Autenticación mediante tokens |
| **bcrypt** | Hash de contraseñas |

---

## 📦 Instalación y uso

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/)

### 1. Clonar el repositorio

```bash
git clone https://github.com/francovaldez99/trello-clone.git
cd trello-clone
```

### 2. Configurar el Backend

```bash
cd server
npm install
```

Crea un archivo `.env` en la carpeta `server`:

```env
PORT=5000
JWT_SECRET=tu_clave_secreta
```

Inicia el servidor:

```bash
npm start
```

> El servidor correrá en `http://localhost:5000`

### 3. Configurar el Frontend

Abre una nueva terminal:

```bash
cd client2
npm install
npm run dev
```

> La aplicación estará disponible en `http://localhost:5173`

---

## 📁 Estructura del proyecto

```
trello-clone/
├── client2/        # Frontend React + Vite
├── server/         # Backend Node.js + Express + SQLite
└── README.md
```

---

## 👤 Autor

**Franco Valdez**
- GitHub: [@francovaldez99](https://github.com/francovaldez99)

---

*Proyecto desarrollado con fines de aprendizaje y práctica fullstack.*
