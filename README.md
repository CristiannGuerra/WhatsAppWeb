# WhatsApp Web Clone

Un clon de WhatsApp Web desarrollado con React y Vite.

## Características

- Interfaz similar a WhatsApp Web
- Chat en tiempo real
- Diseño responsive para móvil y escritorio
- Lista de contactos
- Mensajes encriptados
- Redimensionamiento de paneles

## Tecnologías

- React 18.3.1
- React Router DOM 6.28.0
- React Icons 5.3.0
- Vite 5.4.10
- CSS personalizado

## Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Estructura del Proyecto

```
src/
├── Components/          # Componentes reutilizables
├── Context/            # Context API para estado global
├── Screens/            # Pantallas principales
│   ├── HomeScreen/     # Pantalla principal
│   └── ChatScreen/     # Pantalla de chat
├── public/assets/      # Recursos estáticos
├── App.jsx            # Componente principal
└── main.jsx           # Punto de entrada
```

## Uso

1. La aplicación se inicia en la pantalla principal con la lista de contactos
2. Selecciona un contacto para abrir el chat
3. En dispositivos móviles, la interfaz se adapta automáticamente
4. Los paneles pueden redimensionarse en escritorio

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run lint` - Ejecutar ESLint
- `npm run preview` - Vista previa de la construcción
