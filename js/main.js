// main.js
// Lógica compartida de la plataforma PANORAMA.
// Los datos base se cargan desde data/noticias.json con fetch.
// Usa localStorage para: favoritos, noticias creadas por el usuario (CRUD)
// y noticias eliminadas por el usuario.

const LS_FAVORITOS = "panorama_favoritos";
const LS_EXTRA = "panorama_noticias_extra";
const LS_ELIMINADAS = "panorama_noticias_eliminadas";

const CATEGORIAS = {
  educativas: "Educación",
  tecnologicas: "Tecnología",
  turisticas: "Turismo",
  comerciales: "Comercio"
};

/* ---------- Carga de datos desde JSON ---------- */

let NOTICIAS_BASE = [];

async function cargarNoticias() {
  try {
    const respuesta = await fetch("data/noticias.json");
    if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
    NOTICIAS_BASE = await respuesta.json();
  } catch (error) {
    console.error("No se pudo cargar noticias.json:", error);
    NOTICIAS_BASE = [];
  }
}

/* ---------- Utilidades de almacenamiento ---------- */

function leerLS(clave) {
  try {
    return JSON.parse(localStorage.getItem(clave)) || [];
  } catch (e) {
    return [];
  }
}

function guardarLS(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

/** Devuelve el catálogo completo: base + creadas por el usuario - eliminadas */
function obtenerNoticias() {
  const extra = leerLS(LS_EXTRA);
  const eliminadas = leerLS(LS_ELIMINADAS);
  return [...NOTICIAS_BASE, ...extra].filter(n => !eliminadas.includes(n.id));
}

function obtenerNoticiaPorId(id) {
  return obtenerNoticias().find(n => n.id === Number(id));
}

/* ---------- Seguridad: escapar texto antes de usar innerHTML ---------- */

function escaparHTML(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------- CRUD ---------- */

function crearNoticia(datos) {
  const extra = leerLS(LS_EXTRA);
  const nuevoId = Date.now(); // id único simple
  const noticia = {
    id: nuevoId,
    categoria: datos.categoria,
    titulo: datos.titulo,
    descripcionBreve: datos.descripcionBreve,
    descripcionCompleta: datos.descripcionCompleta,
    imagen: datos.imagen || "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80",
    fecha: new Date().toISOString().slice(0, 10)
  };
  extra.push(noticia);
  guardarLS(LS_EXTRA, extra);
  return noticia;
}

function eliminarNoticia(id) {
  const eliminadas = leerLS(LS_ELIMINADAS);
  if (!eliminadas.includes(Number(id))) {
    eliminadas.push(Number(id));
    guardarLS(LS_ELIMINADAS, eliminadas);
  }
  // Si la noticia era una noticia creada por el usuario, también se limpia de "extra"
  const extra = leerLS(LS_EXTRA).filter(n => n.id !== Number(id));
  guardarLS(LS_EXTRA, extra);
}

/* ---------- Favoritos ---------- */

function esFavorito(id) {
  return leerLS(LS_FAVORITOS).includes(Number(id));
}

function alternarFavorito(id) {
  let favoritos = leerLS(LS_FAVORITOS);
  id = Number(id);
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  guardarLS(LS_FAVORITOS, favoritos);
  return favoritos.includes(id);
}

/* ---------- Render: tarjetas ---------- */

function tarjetaHTML(n) {
  return `
    <article class="card" data-id="${n.id}">
      <div class="card-media">
        <img src="${escaparHTML(n.imagen)}" alt="${escaparHTML(n.titulo)}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-cat">${escaparHTML(CATEGORIAS[n.categoria] || n.categoria)}</span>
        <h3>${escaparHTML(n.titulo)}</h3>
        <p>${escaparHTML(n.descripcionBreve)}</p>
        <div class="card-footer">
          <span class="card-date">${formatearFecha(n.fecha)}</span>
          <a class="btn btn-small" href="detalle.html?id=${n.id}">Ver más</a>
        </div>
      </div>
    </article>
  `;
}

function formatearFecha(fechaISO) {
  const opciones = { day: "numeric", month: "short", year: "numeric" };
  return new Date(fechaISO + "T00:00:00").toLocaleDateString("es-CO", opciones);
}

function renderizarLista(contenedorId, noticias) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  if (noticias.length === 0) {
    contenedor.innerHTML = `<div class="empty-state">No hay noticias para mostrar todavía.</div>`;
    return;
  }
  contenedor.innerHTML = noticias.map(tarjetaHTML).join("");
}

/* ---------- Validación de formularios ---------- */

function validarCampo(input, condicion, mensajeError) {
  const field = input.closest(".field");
  const valido = condicion(input.value.trim());
  field.classList.toggle("invalid", !valido);
  const errorEl = field.querySelector(".error");
  if (errorEl) errorEl.textContent = mensajeError;
  return valido;
}

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- Navegación activa y fecha del día (todas las páginas) ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const pagina = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(a => {
    if (a.getAttribute("href") === pagina) {
      a.setAttribute("aria-current", "page");
    }
  });

  const fecha = document.getElementById("fecha-hoy");
  if (fecha) {
    fecha.textContent = new Date().toLocaleDateString("es-CO", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
  }
});
