interface PresentacionProps {
    nombre: string;
    descripcion: string;
}

function Presentacion({
    nombre,
    descripcion,
}: PresentacionProps) {
    return (
        <section className="presentacion">
            <div className="presentacion-contenido">
                <p className="presentacion-saludo">
                    Hola, soy
                </p>

                <h1>{nombre}</h1>

                <h2>{descripcion}</h2>

                <p className="presentacion-texto">
                    Desarrollo soluciones web orientadas a simplificar
                    tareas, organizar información y mejorar la gestión
                    de negocios y profesionales.
                </p>
            </div>
        </section>
    );
}

export default Presentacion;