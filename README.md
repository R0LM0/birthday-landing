# 🎉 Birthday Landing - R0LMO's 35th Birthday Celebration

Una página de cumpleaños interactiva creada con Next.js para celebrar los 35 años de R0LMO con estilo de programador.

## 🚀 Características

- ✨ Animaciones de partículas flotantes
- 💻 Consola interactiva con mensajes de cumpleaños
- 🎂 Contador de edad animado
- 🔄 Botón para reiniciar la animación de la consola
- 📱 Diseño completamente responsivo
- 🎨 UI moderna con Tailwind CSS y shadcn/ui

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- npm, yarn, o pnpm

### Clonar el Repositorio

```bash
git clone https://github.com/R0LM0/birthday-landing.git
cd birthday-landing
```

### Instalar Dependencias

```bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install
```

### Ejecutar en Desarrollo

```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Construir para Producción

```bash
# Con npm
npm run build
npm start

# Con yarn
yarn build
yarn start

# Con pnpm
pnpm build
pnpm start
```

## 🎮 Funcionalidades Interactivas

- **Animación Automática**: Al cargar la página, se ejecuta automáticamente la animación de la consola
- **Botón de Reinicio**: Haz clic en `$ start_celebration.sh` para reiniciar la animación
- **Contador de Edad**: Animación que cuenta desde 0 hasta 35
- **Partículas Flotantes**: Efectos visuales de fondo

## 📁 Estructura del Proyecto

```
birthday-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Página principal
├── components/
│   └── ui/               # Componentes de shadcn/ui
├── lib/
│   └── utils.ts
├── public/
└── README.md
```

## 🎨 Personalización

Para personalizar los mensajes de cumpleaños, edita el array `consoleMessages` en `app/page.tsx`:

```typescript
const consoleMessages = [
  "$ node birthday_wishes.js",
  "> Inicializando celebración...",
  // Agrega tus propios mensajes aquí
];
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la celebración:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🎂 Dedicatoria

<VibeCoding />
Hecho con dedicación para R0LMO en su 35º cumpleaños. ¡Que tengas un año lleno de commits exitosos y proyectos increíbles!

---

**Version 35.0.0** | Made by [r0lm0.dev](https://github.com/R0LM0/birthday-landing) your friend
