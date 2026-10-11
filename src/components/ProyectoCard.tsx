interface ProyectoCardProps {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  fotoUrl: string;
}

function ProyectoCard({
  nombre,
  descripcion,
  tecnologias,
  fotoUrl,
}: ProyectoCardProps) {
  return (
    <article className="proyecto-card">

      <div className="proyecto-imagen">
        {fotoUrl && (
          <img
            src={fotoUrl}
            alt={`Captura del proyecto ${nombre}`}
          />
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

        <button>
          Ver detalles
        </button>

      </div>

    </article>
  );
}

export default ProyectoCard;