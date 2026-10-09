// data.js
// Fuente de datos local en formato JSON, tal como lo pide el requisito
// "JSON local para manejo de datos". Se carga como script porque el
// proyecto se visualiza también abriendo los archivos directamente
// (file://), donde fetch() de un .json es bloqueado por el navegador.

const NOTICIAS_BASE = [
  {
    id: 1,
    categoria: "tecnologicas",
    titulo: "La inteligencia artificial llega a las aulas universitarias",
    descripcionBreve: "Universidades de la región empiezan a integrar herramientas de IA en sus programas de ingeniería.",
    descripcionCompleta: "Varias universidades de la región han comenzado a incorporar asistentes de inteligencia artificial dentro de sus programas de ingeniería y ciencias de la computación. La medida busca preparar a los estudiantes para un mercado laboral que cada vez exige más habilidades digitales. Docentes destacan que estas herramientas permiten personalizar el aprendizaje, mientras que los estudiantes valoran el acompañamiento adicional para resolver dudas fuera del horario de clase.",
    imagen: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    fecha: "2026-08-02"
  },
  {
          id: 2,
    categoria: "educativas",
    titulo: "Nuevo programa de becas para estudiantes de último semestre",
    descripcionBreve: "Un fondo educativo ofrecerá apoyo económico a estudiantes que estén cerca de graduarse.",
    descripcionCompleta: "El programa está dirigido a estudiantes de últimos semestres de carreras técnicas y profesionales que demuestren buen rendimiento académico. Las becas cubrirán parte de la matrícula y materiales de estudio. Los interesados deberán presentar su hoja de vida académica y una carta de motivación antes de que finalice el semestre.",
    imagen: "https://images.unsplash.com/photo-1761781342506-821be95168c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZHVhY2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    fecha: "2026-07-20"
  },
  {
    id: 3,
    categoria: "turisticas",
    titulo: "Cinco destinos ideales para viajar en temporada baja",
    descripcionBreve: "Viajar fuera de temporada alta permite ahorrar y disfrutar de lugares menos concurridos.",
    descripcionCompleta: "Los expertos en turismo recomiendan aprovechar la temporada baja para conocer destinos populares sin las aglomeraciones habituales. Entre las ventajas se encuentran precios más bajos en alojamiento y transporte, además de una experiencia más tranquila para quienes buscan descanso. La recomendación aplica tanto para viajes nacionales como internacionales.",
    imagen: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    fecha: "2026-08-10"
  },
  {
    id: 4,
    categoria: "comerciales",
    titulo: "Pequeños negocios se digitalizan para vender por internet",
    descripcionBreve: "Cada vez más emprendedores locales incursionan en el comercio electrónico.",
    descripcionCompleta: "Un número creciente de pequeños negocios ha empezado a vender sus productos a través de tiendas en línea y redes sociales. Esta transición ha sido impulsada por programas de acompañamiento digital y capacitaciones gratuitas ofrecidas por cámaras de comercio locales, que buscan fortalecer la competitividad de los emprendedores frente a plataformas grandes.",
    imagen: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    fecha: "2026-07-28"
  },
  {
    id: 5,
    categoria: "tecnologicas",
    titulo: "Angular sigue siendo una de las herramientas favoritas del sector",
    descripcionBreve: "Encuestas recientes muestran que el framework se mantiene entre los más usados por desarrolladores.",
    descripcionCompleta: "A pesar de la aparición de nuevas herramientas, Angular continúa siendo una opción sólida para el desarrollo de aplicaciones web empresariales. Su estructura basada en componentes y su ecosistema robusto lo convierten en una alternativa confiable para equipos que buscan mantenibilidad a largo plazo en sus proyectos.",
    imagen: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80",
    fecha: "2026-08-05"
  },
  {
    id: 6,
    categoria: "educativas",
    titulo: "Talleres gratuitos de habilidades blandas para recién egresados",
    descripcionBreve: "Una fundación ofrece formación en comunicación y trabajo en equipo para jóvenes profesionales.",
    descripcionCompleta: "La iniciativa surge como respuesta a la necesidad de fortalecer competencias que complementen el conocimiento técnico de los recién egresados. Los talleres incluyen ejercicios prácticos de comunicación asertiva, resolución de conflictos y trabajo colaborativo, pensados para facilitar la transición al mundo laboral.",
    imagen: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    fecha: "2026-06-15"
  }
];
