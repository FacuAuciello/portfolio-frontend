import { useState } from "react";

interface ProyectoCardProps {
    nombre: string;
    descripcion: string;
    tecnologias: string[];
    imagenes?: string[];
}

function ProyectoCard({
    nombre,
    descripcion,
    tecnologias,
    imagenes = [],
}: ProyectoCardProps) {
    const [imagenActual, setImagenActual] = useState(0);
    const [imagenAmpliada, setImagenAmpliada] = useState(false);

    const imagenesConUrlCompleta = Array.isArray(imagenes)
        ? imagenes.map((imagen) => {
            if (imagen.startsWith("http")) {
                return imagen;
            }

            return `http://localhost:8080${imagen}`;
        })
        : [];

    function imagenAnterior() {
        if (imagenesConUrlCompleta.length === 0) {
            return;
        }

        setImagenActual((indiceActual) =>
            indiceActual === 0
                ? imagenesConUrlCompleta.length - 1
                : indiceActual - 1
        );
    }

    function imagenSiguiente() {
        if (imagenesConUrlCompleta.length === 0) {
            return;
        }

        setImagenActual((indiceActual) =>
            indiceActual === imagenesConUrlCompleta.length - 1
                ? 0
                : indiceActual + 1
        );
    }

    return (
        <>
            <article className="proyecto-card">
                <div className="proyecto-imagen">
                    {imagenesConUrlCompleta.length > 0 ? (
                        <>
                            <img
                                src={imagenesConUrlCompleta[imagenActual]}
                                alt={`Captura del proyecto ${nombre}`}
                                onClick={() => setImagenAmpliada(true)}
                            />

                            {imagenesConUrlCompleta.length > 1 && (
                                <>
                                    <button
                                        className="flecha-imagen flecha-izquierda"
                                        onClick={imagenAnterior}
                                        aria-label="Imagen anterior"
                                    >
                                        ‹
                                    </button>

                                    <button
                                        className="flecha-imagen flecha-derecha"
                                        onClick={imagenSiguiente}
                                        aria-label="Imagen siguiente"
                                    >
                                        ›
                                    </button>

                                    <div className="indicadores-imagenes">
                                        {imagenesConUrlCompleta.map(
                                            (_, indice) => (
                                                <button
                                                    key={indice}
                                                    className={
                                                        indice === imagenActual
                                                            ? "indicador activo"
                                                            : "indicador"
                                                    }
                                                    onClick={() =>
                                                        setImagenActual(indice)
                                                    }
                                                    aria-label={`Ver imagen ${indice + 1}`}
                                                />
                                            )
                                        )}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div className="proyecto-sin-imagen">
                            Imagen próximamente
                        </div>
                    )}
                </div>

                <div className="proyecto-contenido">
                    <h3>{nombre}</h3>

                    <p>{descripcion}</p>

                    <div className="proyecto-tecnologias">
                        {tecnologias.map((tecnologia) => (
                            <span key={tecnologia}>
                                {tecnologia}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            {imagenAmpliada &&
                imagenesConUrlCompleta.length > 0 && (
                    <div
                        className="modal-imagen"
                        onClick={() => setImagenAmpliada(false)}
                    >
                        <button
                            className="cerrar-modal"
                            onClick={() =>
                                setImagenAmpliada(false)
                            }
                            aria-label="Cerrar imagen"
                        >
                            ×
                        </button>

                        {imagenesConUrlCompleta.length > 1 && (
                            <button
                                className="modal-flecha modal-flecha-izquierda"
                                onClick={(evento) => {
                                    evento.stopPropagation();
                                    imagenAnterior();
                                }}
                                aria-label="Imagen anterior"
                            >
                                ‹
                            </button>
                        )}

                        <img
                            src={
                                imagenesConUrlCompleta[
                                    imagenActual
                                ]
                            }
                            alt={`Captura ampliada del proyecto ${nombre}`}
                            onClick={(evento) =>
                                evento.stopPropagation()
                            }
                        />

                        {imagenesConUrlCompleta.length > 1 && (
                            <button
                                className="modal-flecha modal-flecha-derecha"
                                onClick={(evento) => {
                                    evento.stopPropagation();
                                    imagenSiguiente();
                                }}
                                aria-label="Imagen siguiente"
                            >
                                ›
                            </button>
                        )}
                    </div>
                )}
        </>
    );
}

export default ProyectoCard;