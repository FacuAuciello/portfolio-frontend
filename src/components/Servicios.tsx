
import "./Servicios.css";

type Ejemplo = {
    nombre: string;
    descripcion: string;
    imagen: string;
    tipo: "Funcional" | "Frontend desarrollado" | "Prototipo visual";
    enlace?: string;
};

type Servicio = {
    id: string;
    icono: string;
    titulo: string;
    descripcion: string;
    funcionalidades: string[];
    ejemplos: Ejemplo[];
};

const WHATSAPP_NUMERO = "";

const servicios: Servicio[] = [
    {
        id: "paginas-web",
        icono: "🌐",
        titulo: "Páginas web a medida",
        descripcion:
            "Mostrá tu negocio, productos o servicios en internet con una página profesional, accesible desde celulares y computadoras.",
        funcionalidades: [
            "Páginas institucionales",
            "Sitios para comercios y profesionales",
            "Catálogos de productos",
            "Ubicación, contacto y WhatsApp"
        ],
        ejemplos: []
    },
    {
        id: "sistemas-internos",
        icono: "🔐",
        titulo: "Sistemas internos a medida",
        descripcion:
            "Administrá tu negocio con herramientas privadas, desarrolladas según tus necesidades y tu forma de trabajar.",
        funcionalidades: [
            "Administración de empleados y clientes",
            "Registro de operaciones",
            "Organización de documentos",
            "Seguimiento de tareas",
            "Acceso para usuarios autorizados"
        ],
        ejemplos: []
    },
    {
        id: "stock",
        icono: "📦",
        titulo: "Control de stock e inventario",
        descripcion:
            "Organizá tus productos y llevá un control de las existencias y movimientos de mercadería.",
        funcionalidades: [
            "Productos y categorías",
            "Entradas y salidas de mercadería",
            "Alertas de reposición",
            "Importación de datos desde Excel"
        ],
        ejemplos: []
    },
    {
        id: "ventas",
        icono: "🧾",
        titulo: "Ventas y caja",
        descripcion:
            "Registrá las ventas y controlá los movimientos de dinero de tu comercio.",
        funcionalidades: [
            "Registro de ventas",
            "Caja diaria",
            "Ingresos y egresos",
            "Historial de operaciones",
            "Estadísticas de ventas"
        ],
        ejemplos: []
    },
    {
        id: "turnos",
        icono: "📅",
        titulo: "Turnos y reservas",
        descripcion:
            "Organizá la agenda de tu negocio, administrá clientes y gestioná reservas.",
        funcionalidades: [
            "Agenda de turnos",
            "Disponibilidad de horarios",
            "Registro de clientes",
            "Reservas y cancelaciones",
            "Recordatorios"
        ],
        ejemplos: []
    },
    {
        id: "trabajos",
        icono: "🛠️",
        titulo: "Gestión de trabajos y servicios",
        descripcion:
            "Administrá presupuestos, reparaciones y órdenes de trabajo desde un mismo lugar.",
        funcionalidades: [
            "Registro de clientes",
            "Presupuestos",
            "Órdenes de trabajo",
            "Estados de reparación",
            "Seguimiento de servicios"
        ],
        ejemplos: []
    },
    {
        id: "deportiva",
        icono: "🏋️",
        titulo: "Gestión deportiva",
        descripcion:
            "Soluciones para gimnasios, clubes, escuelas deportivas y academias de entrenamiento.",
        funcionalidades: [
            "Registro de socios",
            "Cuotas y vencimientos",
            "Actividades y horarios",
            "Inscripciones",
            "Gestión de profesores"
        ],
        ejemplos: []
    },
    {
        id: "educativa",
        icono: "🎓",
        titulo: "Gestión educativa",
        descripcion:
            "Herramientas para organizar alumnos, docentes y tareas administrativas de instituciones educativas.",
        funcionalidades: [
            "Registro de alumnos",
            "Cursos y profesores",
            "Control de asistencia",
            "Organización de actividades",
            "Procesos administrativos"
        ],
        ejemplos: []
    },
    {
        id: "gastronomica",
        icono: "🍽️",
        titulo: "Gestión gastronómica",
        descripcion:
            "Organizá los pedidos y la atención de restaurantes, cafeterías, bares y locales gastronómicos.",
        funcionalidades: [
            "Gestión de mesas",
            "Pedidos y comandas",
            "Menú digital",
            "Estados de preparación",
            "Pedidos para llevar"
        ],
        ejemplos: []
    },
    {
        id: "catalogos",
        icono: "🛍️",
        titulo: "Catálogos y pedidos online",
        descripcion:
            "Mostrá tus productos en internet y facilitá que los clientes realicen consultas o pedidos.",
        funcionalidades: [
            "Catálogo de productos",
            "Categorías y filtros",
            "Detalle de productos",
            "Carrito de consulta",
            "Pedidos por WhatsApp"
        ],
        ejemplos: []
    }
];

function obtenerEnlaceWhatsApp(servicio?: string): string {
    const mensaje = servicio
        ? `Hola Facundo, estuve viendo tu portfolio y me interesa ${servicio.toLowerCase()}. Quisiera consultarte por una solución para mi negocio.`
        : "Hola Facundo, estuve viendo tu portfolio y quiero consultarte por una solución personalizada para mi negocio.";

    if (!WHATSAPP_NUMERO.trim()) {
        return "#contacto";
    }

    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

function Servicios() {
    const whatsappConfigurado = WHATSAPP_NUMERO.trim().length > 0;

    return (
        <section id="servicios" className="servicios">
            <div className="servicios-intro">
                <h2>¿Qué necesita tu negocio?</h2>

                <p>
                    Desarrollo páginas web y sistemas personalizados
                    para comercios, profesionales e instituciones.
                    Explorá las soluciones y consultame por la que
                    mejor se adapte a tus necesidades.
                </p>
            </div>

            <div className="servicios-grid">
                {servicios.map((servicio) => (
                    <article
                        key={servicio.id}
                        id={servicio.id}
                        className="servicio-tarjeta"
                    >
                        <div className="servicio-encabezado">
                            <span
                                className="servicio-icono"
                                aria-hidden="true"
                            >
                                {servicio.icono}
                            </span>

                            <h3>{servicio.titulo}</h3>
                        </div>

                        <p className="servicio-descripcion">
                            {servicio.descripcion}
                        </p>

                        <h4>¿Qué podría incluir?</h4>

                        <ul className="servicio-funcionalidades">
                            {servicio.funcionalidades.map(
                                (funcionalidad) => (
                                    <li key={funcionalidad}>
                                        {funcionalidad}
                                    </li>
                                )
                            )}
                        </ul>

                        <div className="servicio-acciones">
                            {servicio.ejemplos.length > 0 && (
                                <a
                                    href={`#ejemplos-${servicio.id}`}
                                    className="boton-ejemplos"
                                >
                                    Ver ejemplos
                                </a>
                            )}

                            <a
                                href={obtenerEnlaceWhatsApp(
                                    servicio.titulo
                                )}
                                className="boton-consultar"
                                target={
                                    whatsappConfigurado
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    whatsappConfigurado
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                Consultar por WhatsApp ↗
                            </a>
                        </div>

                        {servicio.ejemplos.length > 0 && (
                            <div
                                id={`ejemplos-${servicio.id}`}
                                className="servicio-ejemplos"
                            >
                                <h4>Ejemplos disponibles</h4>

                                {servicio.ejemplos.map((ejemplo) => (
                                    <div
                                        key={ejemplo.nombre}
                                        className="ejemplo-item"
                                    >
                                        <img
                                            src={ejemplo.imagen}
                                            alt={ejemplo.nombre}
                                            loading="lazy"
                                        />

                                        <h5>{ejemplo.nombre}</h5>

                                        <span>{ejemplo.tipo}</span>

                                        <p>{ejemplo.descripcion}</p>

                                        {ejemplo.enlace && (
                                            <a
                                                href={ejemplo.enlace}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Abrir demostración ↗
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>

            <div className="servicios-personalizado">
                <h2>
                    ¿No encontraste exactamente lo que necesitás?
                </h2>

                <p>
                    Cada negocio tiene necesidades diferentes.
                    Tal vez necesites combinar funcionalidades de
                    varias de estas soluciones o desarrollar
                    algo completamente personalizado.
                </p>

                <p>
                    Contame qué necesitás y podemos evaluar juntos
                    una solución adaptada a tu forma de trabajar.
                </p>

                <a
                    href={obtenerEnlaceWhatsApp()}
                    target={
                        whatsappConfigurado
                            ? "_blank"
                            : undefined
                    }
                    rel={
                        whatsappConfigurado
                            ? "noopener noreferrer"
                            : undefined
                    }
                >
                    Contame tu idea por WhatsApp ↗
                </a>
            </div>
        </section>
    );
}

export default Servicios;
