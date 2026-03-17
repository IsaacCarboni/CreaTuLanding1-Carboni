# Bodega de Isa 🍷

Este proyecto es una aplicación de E-commerce desarrollada con React, enfocada en la venta de vinos de alta gama. La aplicación permite a los usuarios navegar por el catálogo, filtrar por categorías, visualizar detalles de productos y gestionar un carrito de compras.

🚀 Tecnologías utilizadas

React.js – Biblioteca principal para la interfaz de usuario.

React Router DOM – Navegación SPA entre secciones.

Firebase Firestore – Base de datos para productos y órdenes de compra.

Context API – Gestión global del carrito.

Bootstrap – Estilos y diseño responsivo.

SweetAlert2 – Notificaciones al usuario.

⚙️ Funcionalidades

Catálogo dinámico cargado desde Firebase

Filtrado de productos por categorías

Vista de detalle de producto

Carrito de compras con cálculo de totales

Checkout con generación de orden en Firebase

Persistencia del carrito usando localStorage

🛠 Instalación

Clonar el repositorio:

git clone https://github.com/IsaacCarboni/bodega-isa-react.git

Instalar dependencias:

npm install

Configurar Firebase:

Crear un archivo .env en la raíz con tus credenciales:

VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain

Ejecutar el proyecto:

npm run dev