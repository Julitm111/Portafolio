# Portafolio — Juliana Torres Morales

Portafolio web moderno, profesional y adaptativo para presentar a Juliana como candidata ideal a prácticas en análisis de datos, desarrollo de software y automatización.

Tecnologías sin build: Tailwind CSS por CDN + JavaScript liviano. Se puede migrar fácilmente a React + Tailwind si se desea un stack con componentes.

## Estructura

- `index.html`: landing y todas las secciones (Hero, Sobre mí, Proyectos, Habilidades, Experiencia, Contacto)
- `assets/css/custom.css`: estilos auxiliares (chips, timeline, reveal)
- `assets/js/main.js`: animaciones de entrada, año dinámico y envío del formulario (EmailJS opcional)
- `assets/images/profile-placeholder.svg`: imagen temporal; reemplazar por una foto real

## Contenido a personalizar

- Foto de perfil: coloca tu imagen en `assets/images/profile.jpg` y actualiza el `src` en `index.html`
- Enlaces de LinkedIn / GitHub en la sección Contacto
- Botones “Ver detalles / Ver en GitHub” de los proyectos
- Correo de destino (si usas mailto) o credenciales EmailJS

## Email del formulario (opcional con EmailJS)

1. Crea una cuenta en https://www.emailjs.com/
2. Obtén `Service ID`, `Template ID` y `Public Key`
3. En `assets/js/main.js`:
   - Cambia `EMAILJS_ENABLED` a `true`
   - Reemplaza `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` y `YOUR_PUBLIC_KEY`
4. Opcional: añade el script CDN de EmailJS en `index.html` justo antes de `main.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
```

Si no configuras EmailJS, el formulario abrirá tu cliente de correo con `mailto` como respaldo.

## Desarrollo local

No se requieren dependencias. Abre `index.html` en tu navegador.

Para un servidor local simple (opcional):

- VS Code: usa la extensión Live Server
- Node: `npx serve` (si lo tienes instalado)

## Deploy

### GitHub Pages

1. Crea un repositorio y sube estos archivos a la rama `main`
2. En GitHub: Settings → Pages → Source: `Deploy from a branch` → `main / root`
3. Espera a que se publique y visita la URL proporcionada

### Vercel

1. Importa el repo en Vercel
2. Build command: none (Static)
3. Output: `/` (raíz)

## Migración a React + Tailwind (opcional)

- Inicializa un proyecto con Vite o Next.js
- Copia la paleta, tipografías, secciones y componentes desde `index.html`
- Reemplaza animaciones CSS por Framer Motion si prefieres

## Licencia

Uso personal y académico.
Proyecto personal de Juliana Torres Morales
