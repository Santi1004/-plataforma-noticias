# PANORAMA

Plataforma web de noticias educativas, tecnológicas, turísticas y comerciales, desarrollada como proyecto académico del módulo de **Front End**.

## Autor

Santiago Cardona Suaza

## Descripción

PANORAMA permite explorar noticias organizadas por categoría, guardar noticias como favoritas, ver el detalle de cada una y publicar noticias nuevas desde un panel simple. Todo el contenido se gestiona en el navegador, sin necesidad de un backend.

## Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API para cargar los datos
- LocalStorage para persistir favoritos y noticias creadas por el usuario

## Funcionalidades

- **Renderizado dinámico:** las noticias se cargan desde `data/noticias.json` con `fetch` y se pintan en pantalla con JavaScript, sin HTML escrito a mano por noticia.
- **Filtro por categoría:** Educación, Tecnología, Turismo y Comercio.
- **Detalle de noticia:** página individual con la descripción completa.
- **Favoritos:** cada noticia se puede marcar o quitar de favoritos; se guarda en `localStorage` y persiste al recargar.
- **Publicar noticia (mini CRUD):** formulario para crear noticias nuevas, con validaciones, y opción de eliminarlas desde el listado.
- **Formulario de contacto:** con validaciones de nombre, correo y longitud del mensaje.

## Estructura de carpetas

```
plataforma-noticias/
├── index.html          # Página de inicio
├── noticias.html        # Catálogo con filtros y panel de publicar
├── favoritos.html        # Noticias guardadas como favoritas
├── detalle.html          # Detalle de una noticia
├── contacto.html         # Formulario de contacto
├── css/
│   └── style.css
├── js/
│   └── main.js            # Lógica de carga, render, favoritos, CRUD y validaciones
└── data/
    └── noticias.json      # Datos base de las noticias
```

## Cómo ejecutarlo

El proyecto usa `fetch` para cargar `data/noticias.json`, así que **no funciona abriendo `index.html` con doble clic** (protocolo `file://`). Debe ejecutarse con un servidor local:

1. Clona o descarga este repositorio.
2. Abre la carpeta en VS Code.
3. Instala la extensión **Live Server** (si no la tienes).
4. Clic derecho sobre `index.html` → **Open with Live Server**.
5. Se abrirá en el navegador en `http://127.0.0.1:5500` (o similar).

## Estado del proyecto

Entrega 2 — Prototipo funcional (Semana 5).
