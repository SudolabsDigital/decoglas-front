# Decoglass Architecture Web v2.0

![Decoglass Banner](public/assets/logos/decoglass-banner.png)

> **Architectural Brutalism meets Precision Engineering.**
> Una experiencia web inmersiva para una firma líder en vidrio templado y aluminio de alta gama.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12-ec4899)](https://www.framer.com/motion/)

## 🏗 Concepto de Diseño

Este proyecto rechaza los estándares corporativos tradicionales en favor de una estética editorial y arquitectónica.

-   **Brutalismo Refinado:** Uso de tipografías masivas, grillas asimétricas y contraste extremo (Negro/Blanco).
-   **Micro-Interacciones Físicas:** Cada elemento tiene peso e inercia. Los menús no aparecen, se "construyen".
-   **Glassmorphism Técnico:** El vidrio no es solo un efecto visual (`backdrop-blur`), es el material central de la marca.

## ⚡ Stack Tecnológico (2026)

Este frontend representa el estado del arte en desarrollo web moderno:

-   **Framework:** Next.js 16 (App Router + React Server Components).
-   **Estilos:** Tailwind CSS v4 (Variables Nativas + CSS-in-JS cero runtime).
-   **Animaciones:** Framer Motion 12 (Layout Animations & Scroll-linked effects).
-   **Scroll:** Lenis (Scroll smoothing para una navegación cinematográfica).
-   **Iconografía:** Lucide React.
-   **Fuentes:** Geist Sans & Geist Mono (Vercel Fonts).

## 🚀 Instalación y Desarrollo

### Prerrequisitos
-   Node.js 20+
-   npm o pnpm

### Pasos
1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/decoglas-front.git
    cd decoglas-front
    ```

2.  Instalar dependencias:
    ```bash
    npm install
    ```

3.  Iniciar servidor de desarrollo:
    ```bash
    npm run dev
    ```

4.  Abrir `http://localhost:3000` en tu navegador.

## 📂 Estructura del Proyecto

```bash
src/
├── app/                 # App Router (Layouts & Pages)
├── components/
│   ├── layout/          # Navbar, Footer, Estructuras globales
│   ├── ui/              # Componentes de Diseño Atómico (Botones, Grillas)
│   └── providers/       # Context Providers (SmoothScroll)
└── lib/                 # Utilidades (cn, fetchers)
```

## 🛠 Comandos de Build

-   `npm run build`: Genera la versión de producción optimizada.
-   `npm run start`: Inicia el servidor de producción.
-   `npm run lint`: Ejecuta ESLint para verificar calidad de código.

---

© 2026 Decoglass S.A.C. - Diseño y Desarrollo por [Sudolabs Team - sudolabs-space].
