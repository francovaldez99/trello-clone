# TaskSync 🗂️

> Aplicación fullstack de gestión de tareas inspirada en Trello, con tableros, listas y tarjetas organizables mediante drag & drop.

---

## 🚀 Características

- 📋 **Gestión de tableros** — Crea y administra múltiples tableros de proyectos
- 📝 **Listas personalizadas** — Organiza tus tareas en columnas según tu flujo de trabajo
- 🃏 **Tarjetas de tareas** — Crea, edita y elimina tareas dentro de cada lista
- 🖱️ **Drag & Drop** — Arrastra y suelta tarjetas entre listas de forma intuitiva
- 🧑‍💻 **Interfaz amigable** — UI limpia y simple, fácil de usar desde el primer momento

---

## 🛠️ Tecnologías

### Frontend (`client2`)
| Tecnología | Descripción |
|---|---|
| **React** | Librería principal para la UI |
| **JavaScript** | Lenguaje principal |
| **CSS** | Estilos y maquetación |

### Backend (`server`)
| Tecnología | Descripción |
|---|---|
| **Node.js** | Entorno de ejecución del servidor |
| **Express** | Framework para la API REST |
| **MongoDB** | Base de datos NoSQL |
| **Mongoose** | ODM para MongoDB |

---

## 📦 Instalación y uso

### Prerrequisitos

Asegúrate de tener instalados:
- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local o Atlas)

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

Crea un archivo `.env` en la carpeta `server` con las siguientes variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/tasksync
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
npm start
```

> La aplicación estará disponible en `http://localhost:3000`

---

## 📁 Estructura del proyecto

```
trello-clone/
├── client2/        # Frontend React
├── server/         # Backend Node.js + Express
└── README.md
```

---

## 👤 Autor

**Franco Valdez**
- GitHub: [@francovaldez99](https://github.com/francovaldez99)

---

*Proyecto desarrollado con fines de aprendizaje y práctica fullstack.*
